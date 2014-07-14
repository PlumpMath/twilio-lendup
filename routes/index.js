var express = require('express');
var _ = require('underscore');
var router = express.Router();
var client = require('twilio')(process.env.AUTH_KEY, process.env.SECRET);
/* GET home page. */

function fizzbuzz(upto) {
    array = _.range(0, upto, 1);
}

router.get('/', function (req, res) {
    res.render('index', { title: process.env.AUTH_KEY });
});

module.exports = router;
