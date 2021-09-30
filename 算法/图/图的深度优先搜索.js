//树被称为有向无环图

function Map(value){
    this.value = value;
    this.neighbors = [];
}
let a = new Map("a");
let b = new Map("b");
let c = new Map("c");
let d = new Map("d");

a.neighbors = [b,c,d];
b.neighbors = [a,c];
c.neighbors = [a,b,d];
d.neighbors = [a,c]

function deepSearch(node,target,path){
    if(node === null)return false;
    if(path.includes(node))return false;
    if(node.value === target)return true;
    path.push(node);
    let res = false;
    for(let i = 0; i < node.neighbors.length; i++){
        res = res || deepSearch(node.neighbors[i],target,path)
    }
    return res;
}