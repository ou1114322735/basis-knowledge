
Array.prototype.myFilter = function(fn,rest){
    let arr = [];
    let _this = rest != undefined ? rest : window;
    for (let i = 0; i < this.length; i++) {
         fn.apply(_this,[this[i],i,this]) && arr.push(this[i])
    }
    return arr;
}

let a = [1,2,3];
console.log(a.myFilter((ele)=>ele > 1));

