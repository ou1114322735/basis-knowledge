

Array.prototype.myMap = function(fn,rest){
    let arr = [];
    let len = this.length;
    let _this = rest || window;
    for (let i = 0; i < len; i++) {
        let res = fn.apply(_this,[this[i],i,this]);
        arr.push(res);
    }
    return arr;
}

var a = [2,3,4];
console.log(a.myMap((ele)=>ele*2));