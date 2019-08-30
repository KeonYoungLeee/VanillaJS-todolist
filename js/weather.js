const API_KEY = '9bd0d789e01b76c4955d71989a0972f9';

const weather = document.querySelector('.js-weather');
const COORDS = 'coords'

const getWeather = (lat, lng) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then((response) => {
        return response.json();
    })
    .then( (json) => {
        const temperature = json.main.temp;
        const country = json.sys.country;
        const place = json.name;
        weather.innerText = `${temperature} , ${country}, ${place}`;
    })
} 

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSucces =(position) => {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude,
       longitude,
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);
} 

const handleGeoError =(position) => {
    console.log('Cant access geo location')
} 

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

const loadCoords = () => {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

const weatherInit = () => {
    loadCoords();
}

weatherInit();