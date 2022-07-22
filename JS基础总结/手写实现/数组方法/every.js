Array.prototype.myEvery = function(fn){
    let len = this.length;
    let _this = arguments[1] || window
    for (let i = 0; i < len; i++) {
        if(!fn.apply(_this,[this[i],i,this])){
            return false;
        }
    }
    return true;
}

let arr = [1,2,3];
obj = {a:1}
console.log(arr.myEvery(ele=>ele>1));