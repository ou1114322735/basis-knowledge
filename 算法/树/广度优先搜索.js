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

function deepSearch(rootList,target){
    if(rootList === null)return false;
    var childList = [];
    for(let i = 0; i < rootList.length; i++){
        if(rootList[i] !== null && rootList[i].value === target){
            return true;
        }else{
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return deepSearch(childList,target)
}

console.log(deepSearch([a],"gt"));