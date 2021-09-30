class Stack{
     constructor(){
         this.arr = [];
     }
     //入栈
     push(item){
         this.arr.push(item)
     }
     //出栈
     pop(){
        return this.arr.pop()
     }
     //获取栈顶元素
     top(){
         return this.arr[this.arr.length - 1]
     }
     //清空栈
     clear(){
         this.arr = []
     }
     //获取栈的大小
     size(){
         return this.arr.length;
     }
     //判断栈是否为空
     isEmpty(){
         return this.arr.length === 0
     }
    
}