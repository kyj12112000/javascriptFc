const clockContainer = document.querySelector(".js-clock");//query selector는 element 자식을 탐색
const clockTitle = clockContainer.querySelector("h1"); //clockContainer에서 자식 선택

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //${minutes < 10? `0${minutes}` : minutes} 3항연산자 
    clockTitle.innerText = `${hours<10 ? 0`${hours}`: hours}:${minutes < 10? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    //실시간으로 시간 받아오기
    setInterval(getTime,1000);
}
init();