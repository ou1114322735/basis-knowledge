function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

//前序遍历
function pre(root){
    if(root === null)return;
    console.log(root.value);
    pre(root.left);
    pre(root.right);
}
//中序遍历
function middle(root){
    if(root === null)return;
    middle(root.left);
    console.log(root.value);
    middle(root.right);
}
//后序遍历
function post(root){
    if(root === null)return;
    post(root.left);
    post(root.right);
    console.log(root.value);
}
pre(a);
middle(a);
post(a);