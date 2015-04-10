var express = require('express'),
    path = require('path'),
    request = require('request'),
    app = express(),
    server;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/getsunrisesettimes/:latitude/:longitude/:date', function(req, res) {
    var url = 'http://api.sunrise-sunset.org/json?lat=:latitude&lng=:longitude&date=:date';

    url = url.replace(':latitude', req.params.latitude);
    url = url.replace(':longitude', req.params.longitude);
    url = url.replace(':date', req.params.date);

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
});

app.get('/', function (req, res) {
    res.render('index');
});

server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Atlas is now alive:  http://%s:%s', host, port);
});
