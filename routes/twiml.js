//noinspection JSUnusedGlobalSymbols
/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    twilio = require('twilio'),
    fb = require('../lib/fizzBuzz'),
    mongoose = require('mongoose'),
    Call = require('../lib/call').Call;


var opts = {
    host: 'twilio-lendup.herokuapp.com',
    protocol: 'https'
};
var root_host = 'https://twilio-lendup.herokuapp.com/twiml';

router.post('/call', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.say("Welcome to the fizzbuzzer of fizz goodness")
        .gather({
            action: root_host + '/fizzbuzz_call',
            finishOnKey: '*'
        }, function () {
            this.say('please enter the number you wish to fizzbuzz to and then press *')
        });
    res.send(twiml);
});



router.post('/fizzbuzz_call', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse()

    Call.findOneAndUpdate({ sid: req.param(["CallSid"])},
        {number_request: parseInt(req.param(['Digits']))},
        function () {
        });

    _.each(fb.fizzBuzz(parseInt(req.param(["Digits"]))), function (item) {
        twiml.say(item.toString());
    });
    res.send(twiml);
});


router.post('/fallback', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.say("OHHH NOES THE THINGS HAVE BROKEN!!!");
    res.send(twiml);
});

module.exports = router;