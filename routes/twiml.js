//noinspection JSUnusedGlobalSymbols
/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    twilio = require('twilio'),
    fb = require('../lib/fizzbuzz');

var opts = {
    host: 'twilio-lendup.herokuapp.com',
    protocol: 'https'
};

router.post('/call', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    _.each(fb.fizzBuzz(10), function (item) {
        twiml.message(item);
    });
    res.send(twiml);
});


router.post('/text', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    _.each(fb.fizzBuzz(16), function (item) {
        twiml.message(item.toString());
    });
    res.send(twiml);
});

router.post('/fallback', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("OHHH NOES THE THINGS HAVE BROKEN!!!");
    res.send(twiml);
});

module.exports = router;