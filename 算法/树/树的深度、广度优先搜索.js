function Tree(value){
    this.value = value;
    this.childrens = []
};
let a = new Tree("a");
let b = new Tree("b");
let c = new Tree("c");
let d = new Tree("d");
let e = new Tree("e");
let f = new Tree("f");
let g = new Tree("g");

a.childrens.push(b);
a.childrens.push(c);
a.childrens.push(d);
c.childrens.push(e);
c.childrens.push(f);
c.childrens.push(g);


function deepSearch(root,target){ //树的深度优先搜索
    if(root === null)return false;
    if(root.value === target)return true;
    let res = false;
        root.childrens.forEach(ele=>{
            res = res || deepSearch(ele,target) 
        })
    return res
}

function breadthFirstSearch(roots,target){
    if(roots.length === 0 || roots === null)return false;
    let childs = [];
    for(let i = 0; i < roots.length; i++){
        if(roots[i].value === target){
            return true
        }else{
            childs = childs.concat(roots[i].childrens);
        }
    }
    return breadthFirstSearch(childs,target)
}

console.log(breadthFirstSearch([a],"e"));