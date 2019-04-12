var express = require('express');
var app = express();

app.get('/BlockDomain/:domain', function(req, res) {
    console.log('Want to block domain ' + req.params.domain);
});

app.get('/OriginMultipleTrack/:domain', function(req, res) {
    console.log('This site appears too much, it tracks you ' + req.params.domain);
});

app.get('/TrackingCookie/:domain', function(req, res) {
    console.log('Cookie appear to be tracking ' + req.params.domain);
});

app.get('/TrackingCookieTooHigh/:domain', function(req, res) {
    console.log('Too much cookie entropy, you are probably being tracked ' + req.params.domain);
});

app.listen(443);
console.log('Listening on port 443...');