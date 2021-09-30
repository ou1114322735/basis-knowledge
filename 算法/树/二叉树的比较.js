//默认二叉树左子树和右子树不能交换
function compare(root1,root2){
    if(root1 == root2)return true;
    if(root1 === null && root2 !== null || root1 !== null && root2 === null)return false;
    if(root1.value !== root1.value)return false;
    let left = compare(root1.left,root.left);
    let right = compare(root2.right,root2.right)
    return left && right
}


//左右子树反转情况
function compare2(root1,root2){
    if(root1 == root2)return true;
    if(root1 === null && root2 !== null || root1 !== null && root2 === null)return false;
    if(root1.value !== root1.value)return false;
    return compare(root1.left,root2.left) && compare(root1.right,root2.right)
    ||
    compare(root1.left,root2.right) && compare(root1.right,root2.left)
}