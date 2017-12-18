var path = require('path');
var ejs = require('ejs');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.local.config.js');

var app = express();
var compiler = webpack(config);

app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('html', ejs.__express);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://localhost:3000');
});
