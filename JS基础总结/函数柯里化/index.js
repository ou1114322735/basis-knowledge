function add(a,b,c,d){
    return a+b+c+d;
}

function curry(fn,...rest){
    let len = fn.length;
    return (...args)=>{
        rest = rest.concat(args)
        if(rest.length < len){
            return curry(fn,...rest);
        }
        return fn(...rest)
    }
}

const func = curry(add,1)

console.log(func(3)(5)(10));