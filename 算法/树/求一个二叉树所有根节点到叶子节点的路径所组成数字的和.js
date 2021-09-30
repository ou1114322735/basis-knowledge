function sumTree(root,sum=0){
    if(!root)return 0;
    sum = sum*10 + root.value;
    if(!root.left && !root.right)return sum;
    return sumTree(root.left,sum) + sumTree(root.right,sum)
}