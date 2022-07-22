function add(a,b,c,d){
    return a+b+c+d;
}


// const func = curry(add,1)

// console.log(func(3)(5)(10));

// function curry(fn){
//     var args = Array.prototype.slice.call(arguments,1);
//     return function (){
//         const newArgs = args.concat(Array.prototype.slice.call(arguments);
//         return fn.apply(this,newArgs)
//     }
// }
function curry(fn,...rest){
    let len = fn.length;
    return (...args)=>{
        rest = rest.concat(args)
        if(rest.length < len){
            return curry(fn,...rest)
        }
        return fn(...rest)
    }
}

// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}


