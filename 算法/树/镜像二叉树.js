
function compare(t1,t2){
    if(t1 === null && t2 === null) return true;
    else if(t1 === null || t2 === null) return false;
    return t1.value === t2.value && compare(t1.left,t2.right) && compare(t1.right,t2.left);
}

function isMirror(root){
    return compare(root.left,root.right)
}