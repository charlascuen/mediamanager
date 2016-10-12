var express = require('express');
var app = express();

app.post('/', function (req, res) {
    console.log(req.query);
    res.send('hola');
});

var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
