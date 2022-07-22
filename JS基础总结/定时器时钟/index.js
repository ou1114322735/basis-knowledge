let h1 = document.querySelector("h1");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let sec = document.querySelector(".sec");




function getTime(){
    let curTime = new Date()
    let hour = curTime.getHours();
    let minute = curTime.getMinutes();
    let sec = curTime.getSeconds();
    return {
        hour: hour/12 * 360,
        minute: minute/60*360,
        sec: sec/60*360,
        curTime:parsetime(hour,minute,sec)
    }
}

function parsetime(hour,minute,sec){
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    sec = sec < 10 ? `0${sec}` : sec;
    return `${hour} : ${minute} : ${sec}`
}

function run(){
    let timer;
    timer = setInterval(() => {
        h1.innerHTML = getTime().curTime
    }, 1000);
}
run()
const timer = getTime()
document.getElementsByTagName("style")[0].innerHTML =
            `
        @keyframes sec{
				0%{
					transform: rotateZ(${timer.sec}deg);
				}
				100%{
					transform: rotateZ(${timer.sec + 360}deg);
				}
			}
			@keyframes minute{
				0%{
					transform: rotateZ(${timer.minute}deg);
				}
				100%{
					transform: rotateZ(${timer.minute + 360}deg);
				}
			}
			@keyframes hour{
				0%{
					transform: rotateZ(${timer.hour}deg);
				}
				100%{
					transform: rotateZ(${timer.hour + 360}deg);
				}
			}
            `;