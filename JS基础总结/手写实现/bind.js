Function.prototype.myBind = function(target){
    target = target || window;
    const rest = Array.prototype.slice.call(arguments,1);
    return (...args)=>{
        return this.call(target,...rest,...args);
    }
}


var name = 'windowName';
var obj = {
    name: 'objName',
}
function log(sex,age){
    console.log(this.name);
    console.log(sex,age);
}

log.myBind(obj,'male')(18)