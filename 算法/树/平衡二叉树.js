//平衡二叉树：二叉树的所有子树的左子树深度和右子树深度差不超过1
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
function isBalance(root) {//判断是否为平衡二叉树
    if(root === null)return true;
    let leftDeep = deep(root.left);
    let rightDeep = deep(root.right)
    if(Math.abs(leftDeep - rightDeep) > 1)return false;
    else{
        return isBalance(root.left) && isBalance(root.right);
    }
}
function deep(root){//二叉树深度
    if(root === null)return 0;
    let left = deep(root.left);
    let right = deep(root.right);
    return Math.max(left,right) + 1;
}

function change(root){ //返回平衡二叉树
    if(isBalance(root))return root;
    if(root.left != null) root.left = change(root.left);
    if(root.right != null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2){
        return true;
    }else if(leftDeep > rightDeep){
        return rightRotate(root);
    }else{
        return leftRotate(root);
    }
}

function rightRotate(root){
    //找到新根
    let newRoot = root.left;
    //找到变化分支
    var changeTree = root.left.right;
    //当前旋转节点的左孩子为变化分支
    root.left = changeTree
    //新根的右孩子为旋转节点
    newRoot.right = root;
    //返回新的节点
    return newRoot;
}
function leftRotate(root){
    //找到新根
    let newRoot = root.right;
    //找到变化分支
    var changeTree = root.right.left;
    //当前旋转节点的左孩子为变化分支
    root.right = changeTree
    //新根的右孩子为旋转节点
    newRoot.left = root;
    //返回新的节点
    return newRoot;
}