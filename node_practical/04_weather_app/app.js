var request = require('request');

request({
    url: 'https://ce954029-8387-43e8-95d0-a5a43ba6a65f.mock.pstmn.io/getmapdata',
    json: true
}, (error, response, body) => {
    if( error ){
        console.log("Uable to connect to the server.");
    } else if(body.status === "OK"){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
