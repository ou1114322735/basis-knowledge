const myPromise = (() => {

    const PENDDING = "pendding",
        RESOLVED = "resolved",
        REJECTED = "rejected",
        PromiseState = Symbol("PromiseState"),
        PromiseValue = Symbol("PromiseValue"), //状态数据
        changeStates = Symbol("changeStates"),  //当前状态
        FullfilledList = Symbol("FullfilledList"),//thenable事件队列
        RejectedList = Symbol("RejectedList"),//catchable事件队列
        SettleHandle = Symbol("SettleHandle"),  //已决阶段的后续处理
        linkPromise = Symbol("linkPromise");  //创建串联的Promise



    return class myPromise {

        [changeStates](newState, newValue, queue) {
            if (this[PromiseState] !== PENDDING) {
                //状态无法改变
                return
            }
            this[PromiseState] = newState;
            this[PromiseValue] = newValue;

            //执行相应队列中的函数
            queue.forEach(func => func(newValue));
        };
        /**
         * 
         * @param {*} executor  //未决阶段(pendding)的处理函数
         */
        constructor(executor) {
            this[PromiseState] = PENDDING;
            this[PromiseValue] = undefined;
            this[FullfilledList] = [];//后续处理函数数组->resolved
            this[RejectedList] = []; //后续处理函数数组 ->rejected



            const resolve = data => {
                this[changeStates](RESOLVED, data, this[FullfilledList])
            }
            const reject = res => {
                this[changeStates](REJECTED, res, this[RejectedList])

            }
            try {
                executor(resolve, reject)
            } catch (err) {
                reject(err)
            }
        }
        /**
         * 
         * @param {*} handle  //后续处理函数
         * @param {*} states   //需要立即执行的状态
         * @param {*} queue    //作业队列
         */
        [SettleHandle](handle, states, queue) {
            if (typeof handle !== "function") {
                return
            }
            if (this[PromiseState] === states) {
                setTimeout(() => {
                    handle(this[PromiseValue]);
                }, 0)
            } else {
                queue.push(handle);
            }
        }

        [linkPromise](thenable, catchable) {
            return new myPromise((resolve, reject) => {
                this[SettleHandle]((data) => {
                    try {
                        const result = thenable(data);
                        if (result instanceof myPromise) {
                            result.then(res => {
                                resolve(res)
                            }, err => {
                                reject(err)
                            })
                        } else {
                            resolve(result)
                        }
                    } catch (err) {
                        reject(err)
                    }
                }, RESOLVED, this[FullfilledList]);
                this[SettleHandle]((data) => {
                    try {
                        const result = catchable(data);
                        reject(result)
                    } catch (err) {
                        reject(err)
                    }

                }, REJECTED, this[RejectedList]);
            })
        };
        then(thenable, catchable) {
            return this[linkPromise](thenable, catchable);
        }
        catch(catchable) {
            this[SettleHandle](catchable, REJECTED, this[RejectedList]);
            return this[linkPromise](undefined, catchable);
        }




        static resolve(data) {
            if (data instanceof myPromise) {
                return data
            }
            return new myPromise((resolve) => {
                resolve(data)
            })
        };

        static reject(res) {
            return new myPromise((resolve, reject) => {
                reject(res)
            })
        };


        static all(iterator) {
            return new myPromise((resolve, reject) => {
                const result = iterator.map(item => {
                    let obj = {
                        data: undefined,
                        isResolved: false
                    };
                    item.then(res => {
                        obj.data = res;
                        obj.isResolved = true
                        //判断是否所有的全部完成
                        const unResolved = result.filter(r => !r.isResolved)
                        if (unResolved.length === 0) {
                            //全部完成
                            resolve(result.map(r => r.data));
                        }
                    },err=>{
                        reject(err);
                    });
                        return obj;
                })
            })
        };

        static race(proms) {
            return new myPromise((resolve, reject) => {
                proms.forEach(p => {
                    p.then(data => {
                        resolve(data);
                    }, err => {
                        reject(err);
                    })
                })
            })
        }


    }
})()

function promiseAll(iterator){
    return new Promise((resolve,reject)=>{
        //存储promise的返回值
        let res = new Array(iterator.length);
        let count = 0;
        iterator.forEach((item)=>{
            item.then(data=>{
                res[count] = data;
                if(count == iterator.length){
                    resolve(res);
                }
                count++;

            },err=>{
                reject(err)
            })
        })
    })
}