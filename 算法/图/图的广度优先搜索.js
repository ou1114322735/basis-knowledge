function breadthFirstSearch(roots,target,path) {
    if(roots === null || roots.length === 0)return false;
    let neighbors = [];
    for(let i = 0; i < roots.length; i++){
        if(path.includes(roots[i])) continue;
        path.push(roots[i]);
        if(roots[i].value === target){
            return true;
        }else neighbors = neighbors.concat(roots[i].neighbors)
    }
    return breadthFirstSearch(neighbors,target,path)
}