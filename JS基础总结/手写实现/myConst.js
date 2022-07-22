function myConst(key,val){
    window.key = val;
    Object.defineProperty(window,key,{
        enumerable:false,
        configurable:false,
        get(){
            return val;
        },
        set(value){
            if(value !== val){
                throw new TypeError("不能重复定义")
            }else{
                return val;
            }
        }
    })
}