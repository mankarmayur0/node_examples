var request = require('request');

var getGeoAddress = (link, callback) => {    
    request({
        url: `https://ce954029-8387-43e8-95d0-a5a43ba6a65f.mock.pstmn.io/${link}`,
        json: true
    }, (error, response, body) => {
        if( error ){
            callback("Uable to connect to the server.");
        } else if(body.status === "OK"){
            callback(undefined, {'Address': body.results[0].formatted_address, 
                                'latitude': body.results[0].geometry.location.lat, 
                                'longitude': body.results[0].geometry.location.lng});
        }
    });
}

module.exports = {
    getGeoAddress
}