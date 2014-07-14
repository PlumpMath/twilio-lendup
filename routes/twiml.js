//noinspection JSUnusedGlobalSymbols
/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    twilio = require('twilio'),
    fb = require('../lib/fizzBuzz');

var opts = {
    host: 'twilio-lendup.herokuapp.com',
    protocol: 'https'
};
var root_host = 'https://twilio-lendup.herokuapp.com/twiml';

router.post('/call', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.say("Welcome to the fizzbuzzer of fizz goodness")
        .gather({
            action: root_host + '/fizzbuzz_call'
        }, function () {
            this.say('please enter the number you wish to fizzbuzz to')
        });

    res.send(twiml);
});

router.post('/text', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.say("Welcome to the fizzbuzzer of fizz goodness")
        .gather({
            action: root_host + '/fizzbuzz_call'
        }, function () {
            this.say('please enter the number you wish to fizzbuzz to')
        });
    res.send(twiml);
});


router.post('/fizzbuzz_call', twilio.webhook(opts), function (req, res) {
    _.each(fb.fizzBuzz(10), function (item) {
        twiml.message(item);
    });
});


router.post('/fizzbuzz_text', twilio.webhook(opts), function (req, res) {
    _.each(fb.fizzBuzz(10), function (item) {
        twiml.message(item);
    });
});

router.post('/fallback', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("OHHH NOES THE THINGS HAVE BROKEN!!!");
    res.send(twiml);
});

module.exports = router;