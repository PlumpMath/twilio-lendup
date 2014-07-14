//noinspection JSUnusedGlobalSymbols
/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore');
var express = require('express');
var router = express.Router();
var twilio = require('twilio')(process.env.AUTH_KEY, process.env.SECRET);


router.post('/call', twilio.webhook({
    host: 'https://twilio-lendup.herokuapp.com'
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("This is a test message");
    res.send(twiml);
});


router.post('/text', twilio.webhook({
    host: 'https://twilio-lendup.herokuapp.com'
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("This is a test message");
    res.send(twiml);
});