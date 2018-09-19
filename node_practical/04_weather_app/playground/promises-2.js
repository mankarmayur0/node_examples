var request = require('request');

getGeoLocation = (loc) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://ce954029-8387-43e8-95d0-a5a43ba6a65f.mock.pstmn.io/${loc}`,
            json: true
        }, (error, response, body) => {
            if( error ){
                reject("Uable to connect to the server.");
            } else if(body.status === "OK"){
                resolve({'Address': body.results[0].formatted_address, 
                         'latitude': body.results[0].geometry.location.lat, 
                         'longitude': body.results[0].geometry.location.lng});
            }
        });
    });
}

getGeoLocation('getmapdata').then((result) => {
    console.log(result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});