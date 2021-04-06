const COORDS = 'coords';


function handleGeoSucces(position){
    //getCurrentPosition() 사용 하는 함수 handleGeoSucces
    console.log(position);
}

function handdleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    //getCurrentPosition() 사용 하는 함수 handleGeoSucces
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handdleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();