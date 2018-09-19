var request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/d46c33c7a7c0bacdd6db4ee760742584/${latitude},${longitude}`,
        json: true
    }, 
    (error, request, body) => {
        if(error) {
            callback("Error while getting weather.");
        } else {
            callback(undefined, { temperature: body.currently.temperature,
                                  apparentTemperature: body.currently.apparentTemperature});
        }
    });
}

module.exports = {
    getWeather
}