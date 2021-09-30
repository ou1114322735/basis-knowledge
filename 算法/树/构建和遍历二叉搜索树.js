function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
function buildSearch(arr){  //插入一个number类型数组，构建成二叉搜索树
    if(arr === null || arr.length === 0) return null;
    let root = new Node(arr[0]);
    for(let i = 1; i < arr.length; i++){
        addNode(root,arr[i]);
    }
    console.log(root);
    return root;
}

function addNode(root,target){ //传入树的根节点和目标值，往树里面插入
    if(!root || root.value === target)return;
    if(root.value > target){ //root值大于目标值，插入到左子树中
        if(root.left === null){
            root.left = new Node(target);
        }else{
            addNode(root.left,target);
        }
    }else{//root值小于目标值，插入到右子树中
        if(root.right === null){
            root.right = new Node(target);
        }else{
            addNode(root.right,target);
        }
    }
}

let arr = [5,3,5,4,2,6,8,7,1,9];
const root = buildSearch(arr);

function traverseSearchTree(root,target){ //判断target在不在该树里面
    if(root === null)return false;
    if(root.value === target)return true;
    if(root.value > target)return traverseSearchTree(root.left,target);
    else return traverseSearchTree(root.right,target)

}

console.log(traverseSearchTree(root,5));
