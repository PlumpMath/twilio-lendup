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
var auth_token = process.env.AUTH_KEY;

router.post('/call', function (req, res) {
    if (twilio.validateExpressRequest(req, auth_token, opts)) {
        var twiml = new twilio.TwimlResponse();
        twiml.message("This is a test message");
        res.send(twiml);
    } else {
        res.render('Herp derp')
    }
});


router.post('/text', function (req, res) {
    if (twilio.validateExpressRequest(req, auth_token, opts)) {
        var twiml = new twilio.TwimlResponse();
        twiml.message("This is a test message");
        res.send(twiml);
    } else {
        res.render('Herp derps')
    }
});

module.exports = router;