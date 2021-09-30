function arrDisorder(arr){
for(let i = arr.length - 1;i > 0;i--){
    let index = rand(0,i - 1);
    swap(arr,index,i)
}
return arr;
}

function swap(arr,a,b){
    [ arr[a] , arr[b] ] = [ arr[b] , arr[a] ];
}

function rand(min,max){
    return Math.floor(Math.random()*(max + 1 - min)) + min;
}

let arr = [1,2,3,4,5,6,7]
console.log(arrDisorder(arr));