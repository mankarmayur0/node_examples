const request = require('request');

const weather = (locationDetails, callback) => {
    const url = 'https://api.darksky.net/forecast/b162e896446dc83e98c46d50259a4866/'+locationDetails.latitude+','+locationDetails.longitude;
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', null);
        } else if(response.body.error) {
            callback('Unable to find location.');
        } else {
            // callback(null, {location: locationDetails.location, temprature: response.body.currently.temperature, forecast: response.body.currently.precipProbability});
            callback(null, `At ${locationDetails.location}, currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
        }
    });
}

module.exports = weather;