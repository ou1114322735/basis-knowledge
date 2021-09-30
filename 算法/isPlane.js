function isPlane (arr) {
    if(arr.length % 4 !== 0) return false;
    arr.forEach(element => {
       if(element > 2 && element < 14)return false;
    });
    arr.sort();
    let count = 0;
    for(let i = 0;i < arr.length - 3; i++){
        if(arr[i] === arr[i+1] && arr[i + 1] === arr[i + 2]){
            arr.splice(i,3);
            count ++;
            i--;
        }
        if(arr.length < 4){
            break;
        }
    }
    if(arr.length === count)return true;
    return false;
}

console.log(isPlane([3,3,3,4]));