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
