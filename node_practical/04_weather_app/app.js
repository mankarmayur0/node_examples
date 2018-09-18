// var geocode = require('./geocode/geocode');

// geocode.getGeoAddress('getmapdata', (errorMessage, result) => {
//     if(errorMessage)
//         console.log(errorMessage);
//     else
//         console.log(JSON.stringify(result, undefined, 2));
// });


// weather key : d46c33c7a7c0bacdd6db4ee760742584

var request = require('request');

request({
            url: "https://api.darksky.net/forecast/d46c33c7a7c0bacdd6db4ee760742584/37.8267,-122.4233",
            json: true
        }, 
        (error, request, body) => {
            console.log(`Temperature: ${body.currently.temperature}`);
        });