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
                                'Latitude': body.results[0].geometry.location.lat, 
                                'longitude': body.results[0].geometry.location.lng});
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            // return body.results[0].formatted_address;
        }
    });
}

module.exports = {
    getGeoAddress
}