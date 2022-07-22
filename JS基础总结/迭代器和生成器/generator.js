//模仿异步获取数据
function asyncGetData(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("异步数据获取成功")
        }, 3000);
    })
}

//生成器函数
function* createGenerator(){
    console.log("开始");
    let res = yield asyncGetData();
    console.log("第一次:",res);
    res = yield asyncGetData();
    console.log("第二次:",res);
    res = yield 1;
    console.log("结束",res);
}

//参数是一个生成器函数
function run(func){
    const generator = func();
    next()
    function next(nextVal){
        const result = generator.next(nextVal);
        if(result.done){
            //迭代结束
            return;
        }
        //简单判断是不是promise，更细的判断可以用isPromise库
        if(typeof result.value.then === "function"){
            result.value.then(data=>next(data));
        }else{
            next(result.value);
        }
    }
}

run(createGenerator)