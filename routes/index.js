var express = require('express');
var twilio = require('twilio');
var human = require('human-interval');
var Call = require('../lib/call').Call;


var router = express.Router();
var tclient = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//TODO:: DOCUMENT THIS
var number = process.env.PHONE_NUM || '+15097403508';
/* GET home page. */

router.get('/', function (req, res) {
    Call.find(function (err, cs) {
        if (err) {
            cs = [];
        }
        res.render('index', {
            title: 'Fancy thing to show off awesome',
            calls: cs
        });
    });
});

router.post('/recall', function (req, res) {
    Call.findOne({sid: req.param(["sid"])}).exec(function (err, call) {
        var promise = tclient.makeCall({
            to: call.to,
            from: call.from,
            url: 'https://twilio-lendup.herokuapp.com/twiml/fizzbuzz_call?digits=' + call.number_requested
        });

        promise.then(function (call) {
            res.send('Call success Call SID: ' + call.sid);
            console.log('Call success Call SID: ' + call.sid);
        }, function (error) {
            res.send('Error: ' + error.toString());
            console.log('Error: ' + error.toString());
        });
    });
});

router.post('/start_call', function (req, res) {
    var when = human(req.param(['when']));
    c = new Call({
        started: Date.now(),
        to: req.param(['number']),
        from: number,
        status: 'queued',
        when: when
    });
    c.save();

    setTimeout(function () {
        var promise = tclient.makeCall({
            to: req.param(['number']),
            from: number,
            url: 'https://twilio-lendup.herokuapp.com/twiml/call'
        });

        promise.then(function (call) {
            c.sid = call.sid;
            c.status = "In progress";
            c.save();
            console.log('Call success! Call SID: ' + call.sid);
        }, function (error) {
            console.error('Call failed!  Reason: ' + error.message);
            c.status = "Failed" + error.message;
            c.save();
        });
    }, when);
    res.send("job Queued");
});

module.exports = router;
