var geocode = require('./geocode/geocode');

geocode.getGeoAddress('getmapdata', (errorMessage, result) => {
    if(errorMessage)
        console.log(errorMessage);
    else
        console.log(JSON.stringify(result, undefined, 2));
});
