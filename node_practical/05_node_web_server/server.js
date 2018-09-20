var express = require('express');

var app = express();

app.get('/', (req, resp) => {
    resp.send('<h1>Hello Express</h1>');
});

app.get('/about', (req, resp) => {
    resp.send('<h1>About Page</h1>');
});

app.get('/bad', (req, resp) => {
    resp.send({
        errorMessage: "Unable to server the request"
    });
});

app.listen(3000);

