var axios = require('axios');

var geoLocationUrl = 'https://ce954029-8387-43e8-95d0-a5a43ba6a65f.mock.pstmn.io/getmapdata';

axios.get(geoLocationUrl).then((response) => {
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherInfoUrl = `https://api.darksky.net/forecast/d46c33c7a7c0bacdd6db4ee760742584/${latitude},${longitude}`;
    
    console.log(`Address: ${response.data.results[0].formatted_address}`);    
    return axios.get(weatherInfoUrl);
}).then((response) => {
    console.log(`Its current temperature ${response.data.currently.temperature}. But it will be ${response.data.currently.apparentTemperature}.`);
}).catch((error) => {
    if( error.code === 'ENOTFOUND' )
        console.log('Unable to find Server.');
    else        
        console.log('error encountered.');
});



