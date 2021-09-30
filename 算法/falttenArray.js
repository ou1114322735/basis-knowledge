function myType(array){
    let result = [];
for (const item of array) {
    if(item instanceof Array){
        //递归
        let newArr = myType(item)
        result = [...result,...newArr] 
    }else{
        result.push(item)
    }
}
return result
}




function flatten1(arr) {
    //当里面存在数组
   while(arr.some((el)=>Array.isArray(el))){
       arr = [].concat(...arr);
   }
   return arr
}


function myTypeOf(array){
     let str = array.join(",");
     return str.split(",").map(i=>+i)
}



function myFlatten(arr){
    let res = [];
    function flat(arr){
        if(!Array.isArray(arr))return arr;
        for (const key in arr) {
            if (Object.hasOwnProperty.call(arr, key)) {
                const element = arr[key];
                if(Array.isArray(element)){
                    res.push(flat(element));
                }else{
                    res.push(element);
                }
            }
        }
    }
     flat(arr);
     return res;
}