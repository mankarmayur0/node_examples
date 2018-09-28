var express = require('express');
var hbs = require('hbs');
var fs = require('fs');

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

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `Time: ${now}, RequestType: ${req.method}, Path: ${req.path}`;
    console.log(log);
    fs.appendFile('system.log', log + '\n', ((err) => {
        console.log('Error in requesting server to load.');
    }));
    next();
});

app.use((req, res, next) => {
    res.render('maintainance.hbs', {
        message: 'Site is under maintainance!',
        pageName: 'Maintainance Page'
    });
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        welcomeMessage: 'Welcome to Home Page!',
        pageName: "Home Page",
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageName: "About Us Page",
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Unable to server the request"
    });
});

app.listen(3000, () => {
    console.log('Server is up and running on 3000 port.')
});

