var express = require('express');
var app = express()
var minifyHTML = require('express-minify-html');
var Post =require('../model/post');
// app.use(minifyHTML({
//     override:      true,
//     exception_url: false,
//     htmlMinifier: {
//         removeComments:            true,
//         collapseWhitespace:        true,
//         collapseBooleanAttributes: true,
//         removeAttributeQuotes:     true,
//         removeEmptyAttributes:     true,
//         minifyJS:                  true
//     }
// }));
app.get('/', function (req, res, next) {




    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var d = new Date();
    var currentFullYear = d.getFullYear();
    Post.find().then(postData => {
        res.render('postview', {post:postData,fullUrl:fullUrl,website:req.protocol + '://' + req.get('host'),currentFullYear:currentFullYear}, function(err, html) {
            // The output is minified, huzzah!
            res.send(html);
        })
    });
});
module.exports = app;
