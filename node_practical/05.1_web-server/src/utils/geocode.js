const request = require('request');

const geoCode = (location, callback) => {
    const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoibWFua2FybWF5dXIwIiwiYSI6ImNrNGxibXVwajA0MzMzbm81YXVsb3c5cHYifQ.JeELlEf3mE75Cs9IqVTuFA';
    request({ url: mapUrl, json: true }, (error, response) => {
        if( error ) {
            callback('Unable to connect to location services.', null);
        } else if( response.body.features.length === 0 ) {
            callback('Unable to find location. Try another search', null);
        } else {
            callback(null, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            });
        }
    });
}

module.exports = geoCode;
