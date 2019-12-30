const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode('Nagpur', (error, response) => {
    if(error) {
        console.log('error = ', error);
    } else if(response) {
        weather(response, (error, response) => {
            if(error) {
                console.log('error = ', error);
            } else {
                console.log(response);
            }
        });
    }
});
