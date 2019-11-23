var express = require('express')
var app = express()
var minifyHTML = require('express-minify-html');
app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));
var keywords="your, tags";
var description="150 words";
var subject="your website's subject";
var copyright="company name";
var topic="social refrm";
var summary="sumarray of blog";
var Classification="Business";
var author="name, email@hotmail.com";
var url="http://www.websiteaddrress.com";
var identifieruRL="http://www.websiteaddrress.com";
var category="";
var coverage="Worldwide";
var distribution="Global";

app.get('/', function (req, res, next) {
    res.render('index', { title : 'world',keywords:keywords}, function(err, html) {
        // The output is minified, huzzah!
        res.send(html);
    })
});
module.exports = app;
