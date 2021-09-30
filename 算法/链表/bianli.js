function Node(value){
    this.value = value;
    this.next = null;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;


//循环遍历链表
function bianli(node){
    while(node){
        console.log(node.value)
        node = node.next
    }
}

//递归遍历链表
function diguibianli(node){
    if(!node)return;
    console.log(node.value);
    diguibianli(node.next)
}

//递归遍历数组
function diguishuzu(arr,i){
    if(arr === null || arr.length <= i)return;
    console.log(arr[i]);
    diguishuzu(arr,i+1)
}