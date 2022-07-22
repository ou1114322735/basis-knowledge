//防抖定时器版本
function debounce(func,delay){
    let timer = null;
    return (...args)=>{
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func(...args);
        },delay)
    }
}

// //防抖时间戳版本
// function debounce(func,delay) {

// }


var btn = document.getElementById("btn");
btn.onclick=debounce(func,1000);


function func(){
    console.log(1);
};


// // 节流时间戳版本
// function throttle(func,delay) {
//     let prev = 0;
//     return (...args)=>{
//         let now = +new Date;
//         if(now - prev >= delay) {
//             func(...args);
//             prev = now;
//         };
//     }
// }

// //定时器
// function throttle(func,delay){
//     let timer = null;
//     return (...args)=>{
//         if(!timer) {  //timer为null进入
//             timer = setTimeout(()=>{
//                 func(...args);
//                 timer =null;
//             },delay)
//         }
//     }

// }




