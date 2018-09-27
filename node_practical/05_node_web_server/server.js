var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentDate', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, resp) => {
    resp.render('home.hbs', {
        welcomeMessage: 'Welcome to Home Page!',
        pageName: "Home Page",
    })
});

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageName: "About Us Page",
    });
});

app.get('/bad', (req, resp) => {
    resp.send({
        errorMessage: "Unable to server the request"
    });
});

app.listen(3000, () => {
    console.log('Server is up and running on 3000 port.')
});

