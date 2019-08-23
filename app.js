const express = require('express');
const router = require('./routes/route.js');
const stylus = require('stylus');
const path = require('path');

var mylogger = (req,res,next) => {
    console.log(req.method+" "+req.url);
    next();
}

const app = express();
app.use(mylogger);
app.use('/', router);
app.use(express.static('public'))
app.set('views', './views');
app.set('view engine', 'pug');
app.use(stylus.middleware({
    src: path.join(__dirname, '/public'),
    dest: path.join(__dirname, '/public')
    }));



app.listen(2000, () => {
    console.log('server listening at 2000');
});