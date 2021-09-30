class Stack{
    constructor(){
        this.arr = [];
    }
    //入队列
    push(item){
        this.arr.push(item)
    }
    //出队列
    pop(){
       return this.arr.shift()
    }
    //获取队首
    head(){
        return this.arr[0]
    }
    //获取队尾元素
    tail(){
        return this.arr[this.arr.length - 1];
    }
    //清空队列
    clear(){
        this.arr = []
    }
    //获取队列的大小
    size(){
        return this.arr.length;
    }
    //判断队列是否为空
    isEmpty(){
        return this.arr.length === 0
    }
   
}