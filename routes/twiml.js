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
    call = require('../lib/call');

mongoose.connect(process.env.MONGOHQ_URL);

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

router.post('/text', twilio.webhook({
    validate: false
}), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    twiml.message("enter the number of times you want to fizzbuzz");
    twiml.redirect(root_host + '/fizzbuzz_text');
    res.send(twiml);
});


router.post('/fizzbuzz_call', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse();

    Call.findOne({ sid: req.param(["CallSid"])}).exec(function (err, call) {
        call.number_requested = parseInt(req.param(["Digits"]));
    });

    _.each(fb.fizzBuzz(parseInt(req.param(["Digits"]))), function (item) {
        twiml.say(item.toString());
    });
    res.send(twiml);
});


router.post('/fizzbuzz_text', twilio.webhook(opts), function (req, res) {
    var twiml = new twilio.TwimlResponse();
    _.each(fb.fizzBuzz(parseInt(req.param(["Body"]))), function (item) {
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