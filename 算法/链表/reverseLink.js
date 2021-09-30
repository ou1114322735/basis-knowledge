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

function reverseLink(node){
    if(node.next.next === null){  //倒数第二个节点
        node.next.next = node;  //node的下一个节点指向自己
        return node.next;
    }
        var res = reverseLink(node.next);
        node.next.next = node;
        node.next = null;
        return res;
}

var newRoot = reverseLink(a);

function diguibianli(root ){
    if(!root)return
    console.log(root.value);
    diguibianli(root.next);
}

diguibianli(newRoot)
