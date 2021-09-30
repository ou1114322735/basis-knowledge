//简易版
// function quickSort(arr){
//     if(arr.length === 0 || arr === null)return []
//     let leader = arr[0]; //以leader为中心，小的放左边，大的放右边
//     let left = [];
//     let right = [];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < leader){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     left = quickSort(left);
//     right = quickSort(right);
//     return [...left,leader,...right]
// }



//标准版
// function quickSort(arr, left, right) {
//     let len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;
 
//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex-1);
//         quickSort(arr, partitionIndex+1, right);
//     }
//     return arr;
// }
 
// function partition(arr, left ,right) {     // 分区操作
//     let pivot = left,                      // 设定基准值（pivot）
//         index = pivot + 1;
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }       
//     }
//     swap(arr, pivot, index - 1);
//     return index-1;
// }


function quickSort(arr,begin,end){
    if(begin >= end)return;
    let left = begin,
        right = end;
    while(left < right){
        do{
            left ++;
        }while(left < right && arr[left] < arr[begin]);
        do{
            right --;
        }while(left < right && arr[right] > arr[begin]);
        if(left < right){
            [arr[left], arr[right]] = [arr[right],arr[left]]
        }
    }
    let swapPos = left === right ? right - 1:right;
    [ arr[begin] , arr[swapPos] ] = [ arr[swapPos] , arr[begin] ]
    quickSort(arr,0,swapPos - 1);
    quickSort(arr,swapPos + 1,end)
    return arr
}

let arr = [5,2,3,1,4,6,7,8,5]
console.log(quickSort(arr,0,arr.length - 1));