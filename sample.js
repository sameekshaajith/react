var express = require('express');

var app = express();

app.get('/send-ok', function(req, res) {
    res.status(200).send({message: 'Data was submitted successfully.'});
    });

    app.listen(2000);