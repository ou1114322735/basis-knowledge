function* fibo(max){
    let [prev,cur] = [0,1];
    yield prev;
    for(;;){
        yield cur;
        [prev,cur] = [cur,prev+cur];
        max = max || 1000;
        if(cur > max)break;
    }
}

function fibo2(n){
    if(n === 0)return 0;
    else if(n === 1 || n === 2) return 1;
    let pre2 = 1,
        pre = 1,
        cur = 0;
    for(let i = 3; i <= n; i++){
        cur = pre2 + pre;
        pre2 = pre;
        pre = cur;
    }
    return cur
}

function fibo3(n){
    if(n === 0)return 0;
    else if(n === 1 || n === 2) return 1;
    return fibo3(n - 1) + fibo(n - 2)
}