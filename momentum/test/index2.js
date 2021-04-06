const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    //아래부분에서 handleResize()괄호를 붙히면 지금 시작하라는 뜻임
    // 괄호 없이 하면 내가 원할때 함수를 실행 하라는 의미임 중요함
    title.addEventListener("click", handleClick);
}
init();
