var express = require('express'),
    path = require('path'),
    app = express(),
    server;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', function (request, response) {
    response.render('index');
});

server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Atlas is now alive:  http://%s:%s', host, port);
});
