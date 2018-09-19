var geocode = require('./geocode/geocode');
var weather = require('./weather/weather');

geocode.getGeoAddress('getmapdata', (errorMessage, result) => {
    if(errorMessage)
        console.log(errorMessage);
    else {
        console.log(result.Address);
        weather.getWeather(result.latitude, result.longitude, (errorMessage, result) => {
            if(errorMessage)
                console.log(errorMessage);
            else
                console.log(`Current Temperature is ${result.temperature} but it feels lie ${result.apparentTemperature}`);
        });
    }
});



