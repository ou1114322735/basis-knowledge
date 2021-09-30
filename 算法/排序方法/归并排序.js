function mergeSort(arr){
    let len = arr.length
    if(len === 1) return arr;
    let min = Math.floor(len / 2),
    left = arr.slice(0,min),
    right = arr.slice(min,len);
    return merge(mergeSort(left),mergeSort(right))
  }
  
  function merge(left,right) {
    let result = [];
    while(left.length>0 && right.length>0){
      if(left[0]>=right[0]){
        result.push(right.shift());
      }else{
        result.push(left.shift());
      }
    }
    while(left.length){
      result.push(left.shift());
    }
    while(right.length){
      result.push(right.shift());
    }
    return result;
  }