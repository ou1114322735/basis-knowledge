class MySet {
    constructor(iterator = []){
        this._datas = [];
        if(typeof iterator[Symbol.iterator] !== 'function'){
            throw new TypeError(`${iterator}不是一个可迭代对象`)
        };
        for (const item of iterator) {
            this.add(item)
        }
    }
    get size(){
        return this._datas.length
    }
    add(item){
        if(!this.has(item)){
            this._datas.push(item);
        }
    }
    
    has(item){
        for (const data of this._datas) {
            if(this.isEqual(item,data))return true;
        }
        return false
    }

    delete(item){
        this._datas.forEach((data,i)=>{
            if(this.isEqual(data,item)){
                this._datas.splice(i,1);
            }
        })
    }

    clear(){
        this._datas = []
    }

    * [Symbol.iterator](){
        for (const item of this._datas) {
            yield item
        }
    }

    forEach(fn){
        for (const item of this._datas) {
            fn(item,item,this)
        }
    }

    isEqual(item1,item2){
        if(item1 === 0 && item2 === 0)return true;
        return Object.is(item1,item2)
    }
}

