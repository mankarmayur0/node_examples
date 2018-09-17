var request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombart%20street%20philadephia',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
    // console.log(body);
    
});