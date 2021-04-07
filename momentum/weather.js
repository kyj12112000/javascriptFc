const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '7d47bdb2f60c145377d16c5e695cd810';

//날씨데이터 가져오는 함수
function getWeather(lat,lon){
    //데이터 가져올때 fetch 사용
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        // then을 사용한 이유는 fetch가 완료되길 기다려야함
        // console.log(response.json());
        return response.json();
    })
    .then(function(json){
        console.log(json); //json이 다 완료 되면 가져옴
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} : ${place}`;

    })
}

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
    getWeather(latitude,longitude);
}

function handdleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    //getCurrentPosition() 사용 하는 함수 handleGeoSucces
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handdleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //기존에 스트링을 JSON으로 변환
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();