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

function reverseTree(root){
    if(root === null)return null;
    [root.left , root.right] = [root.right,root.left];
    reverseTree(root.left);
    reverseTree(root.right);
    return root;
}

console.log(reverseTree(a));