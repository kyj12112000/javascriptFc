const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log('finshed loading');
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
    //아래에는 api가 아니라서 필요가 없음 image가 내장되어 있어서 api일 경우는 필요
    // image.addEventListener("loaded", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();