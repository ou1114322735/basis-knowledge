function sort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0;j<arr.length - 1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [4,2,5,6,1,8,11,51,13,6,7]
console.log(sort(arr));