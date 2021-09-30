function exchange(arr,a,b){
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}
const sort = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        let maxIndex = 0;
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j
            }
        }
        exchange(arr,maxIndex,arr.length - 1 - i)
        
    }
    return arr;
}

const arr = [4,2,5,6,1,8,11,51,13,6,7]
console.log(sort(arr));