// function Node(val){
//     this.val = val;
//     this.next = null;
// }

// var node1 = new Node(1) 
// var node2 = new Node(2) 
// var node3 = new Node(3) 
// var node4 = new Node(4) 

// node1.next = node2
// node2.next = node3
// node3.next = node4

// function bianli(node){
//     var temp = node;
//     while(true){
//         if(temp !== null){
//             console.log(temp.val);
//         }else{
//             break;
//         }
//         temp = temp.next
//     }
// }

// function bianli1(node){
//     if(node === null) return
//     console.log(node.val);
//     bianli1(node.next)
// }

// bianli1(node1)

// async function getStudents(page = 1, limit = 10) {
//     return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
//         .then(resp => resp.json()).then(resp => resp.data);
// }

// const res = getStudents();
// console.log(res)


var  iterator = {
    total:3,
    index:1,
    next(){
        var obj = {
            value:this.index > this.total ? undefined:this.index, 
            done: this.index > this.total 
        }
        this.index++
        return obj;
    }
}

function createIterator(){
    let total = 3,
    index = 1;
    return {
    next(){
        var obj = {
            value:index > total ? undefined:index, 
            done: index > total 
        }
        index++
        return obj;
    }
    }
}


const obj = {
    [Symbol.iterator]:function createIterator(){
        let total = 3,
        index = 1;
        return {
        next(){
            var obj = {
                value:index > total ? undefined:index, 
                done: index > total 
            }
            index++
            return obj;
        }
        }
    }
}

const iterator = obj[Symbol.iterator]();
let next = iterator.next()
while(!next.done){
    //done属性为false进入循环
    const item = next.value;
            console.log(item); //执行循环体
            next = iterator.next();
}

for (const item of obj) {
    console.log(item)
}


function* createGenerator(){
    console.log("开始");
    let res = yield 1;
    console.log("第一次,",res);
    res = yield 2;
    console.log("第二次,",res);
    
}