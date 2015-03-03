var express = require('express'),
    app = express(),
    server;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
    response.render('index');
});

app.get('/yourMomma', function(request, response) {
    response.send('your Moma is a hooker');
});

server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
