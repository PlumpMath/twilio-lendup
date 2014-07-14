//noinspection JSUnusedGlobalSymbols
/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    twilio = require('twilio')

var opts = { host: 'https://twilio-lendup.herokuapp.com'};

router.post('/call', twilio.webhook(opts, function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("This is a test message");
    res.send(twiml);
}));


router.post('/text', twilio.webhook(opts, function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("This is a test message");
    res.send(twiml);
}));


module.exports = router;