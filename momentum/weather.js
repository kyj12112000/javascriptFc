const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    //getCurrentPosition() 사용 하는 함수 handleGeoSucces
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // key value 가 같을때는 하나만 사용해도 됨
        latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
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