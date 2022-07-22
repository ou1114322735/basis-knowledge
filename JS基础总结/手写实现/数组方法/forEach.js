

Array.prototype.myForEach = function(fn){
    let len = this.length;
    let _this = arguments[1] != undefined ? arguments[1] : window;
    for(let i = 0; i < len; i++){
        fn.apply(_this,[this[i],i,this])
    }
}

var obj = {name:"wang"}
var arr = [1,2,3,4];
arr.myForEach((ele,i,self)=>{
    console.log(ele,i,self,this);
},obj)




