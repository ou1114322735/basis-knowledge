class MyPromise {
     resolve = res=>{
        if(this.pending){
            this.value = res;
            for(const fullFilled of this.pending){
                fullFilled(this.value);
            };
            this.pending = undefined
        }
    }
    then(callback){
        if(this.pending){
            this.pending.push(callback);
        }else{
            callback(this.value)
        }
    }
    constructor(executor){
        this.value = undefined;
        this.pending = [];
        executor(this.resolve);
    }
}

const pro = new MyPromise(resolve=>setTimeout(resolve,2000,123))
        pro.then(datas => {
            console.log("全部完成", datas);
        })

