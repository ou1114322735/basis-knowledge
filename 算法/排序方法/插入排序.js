function insertSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
}

const arr = [5,2,3,1,4,6,7,8,5]
console.log(insertSort(arr));

