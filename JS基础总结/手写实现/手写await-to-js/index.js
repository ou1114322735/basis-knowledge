

function to(promise,errext){
    return promise.then(res=>[null,promise])
    .catch(err=>{
        if(errext){
            Object.assign(err,errext)
        };
        return [err,undefined];
    })
}