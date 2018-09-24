var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, resp) => {
    resp.render('home.hbs', {
        welcomeMessage: 'Some Site',
        pageName: "Some Site Page",
        copyRightYear: new Date().getFullYear()
    })
});

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageName: "About Us Page",
        copyRightYear: new Date().getFullYear()
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

