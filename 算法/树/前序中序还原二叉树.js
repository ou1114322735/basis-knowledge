function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}



var prev = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
var mid = ['d', 'b', 'e', 'a', 'f', 'c', 'g']
function nodeTrue(prev, mid) {
    if (prev === null || mid === null
        ||
        prev.length === 0 || mid.length === 0
        ||
        prev.length !== mid.length
    ) return null;
    var rootNode = new Node(prev[0]);
    var rootIndexInMid = mid.indexOf(rootNode.value);
    var prevLeft = prev.slice(1,rootIndexInMid+1);
    var prevRight = prev.slice(rootIndexInMid+1,prev.length);
    var midLeft = mid.slice(0,rootIndexInMid);
    var midRight = mid.slice(rootIndexInMid + 1, mid.length);
    rootNode.left = nodeTrue(prevLeft,midLeft);
    rootNode.right = nodeTrue(prevRight,midRight);
    return rootNode;
}

console.log(nodeTrue(prev,mid));