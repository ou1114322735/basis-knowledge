function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}



var mid = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
var post = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];
function nodeTrue(mid,post) {
    if (post === null || mid === null
        ||
        post.length === 0 || mid.length === 0
        ||
        post.length !== mid.length
    ) return null;
    var rootNode = new Node(post[post.length - 1]);
    var rootIndexInMid = mid.indexOf(rootNode.value);
    var postLeft = post.slice(0,rootIndexInMid);
    var postRight = post.slice(rootIndexInMid,post.length - 1);
    var midLeft = mid.slice(0,rootIndexInMid);
    var midRight = mid.slice(rootIndexInMid + 1, mid.length);
    rootNode.left = nodeTrue(midLeft,postLeft);
    rootNode.right = nodeTrue(midRight,postRight);
    return rootNode;
}

console.log(nodeTrue(mid,post));