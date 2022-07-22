var cookie = "BIDUPSID=D91F63868937C3BE9AA47B7A2F177476; PSTM=1598272080; BAIDUID=D91F63868937C3BECBC932889397040A:FG=1; BD_UPN=12314753; MCITY=-233%3A; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BAIDUID_BFESS=D91F63868937C3BECBC932889397040A:FG=1; __sec_t_key=4d2bbcd7-207c-4125-ab2a-60015a3e5af0; Hm_lvt_aec699bb6442ba076c8981c6dc490771=1627834432,1629039827,1629217252,1629374237;"

function cookieToObj(str){
    let obj = {}
    cookieArr = cookie.split("; ");
    cookieArr.myReduce((pre,cur,index,self)=>{
        var arr = cur.split("=");
        obj[arr[0]] = arr[1];
        return obj
    },obj)
    return obj;
}

Array.prototype.myReduce = function (fn,initialValue) {
    let nextValue = initialValue
    for(let i = 0; i < this.length; i++){
        nextValue = fn(nextValue,this[i],i,this)
    }
    return nextValue;
}

console.log(cookieToObj(cookie));