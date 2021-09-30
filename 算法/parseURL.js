function parseURL(url) {
    let obj = {};
    let queryIndex = url.indexOf("?") + 1;
    let queryAndHashStr = url.substr(queryIndex);
    let indexHash = queryAndHashStr.indexOf("#");
    let result;
    if(indexHash !== -1){
        result = queryAndHashStr.substring(0,indexHash);
    }else{
        result = queryAndHashStr;
    }
    let resArr = result.split("&");
    resArr.reduce((pre,cur,i,self)=>{
        let arr = cur.split("=");
        obj[arr[0]] = arr[1]
        return obj;
    },obj)

    return obj;
}


const url = "https://so.csdn.net/so/search/all?q=query&t=all&p=1&s=0&tm=0#123";

console.log(parseURL(url));