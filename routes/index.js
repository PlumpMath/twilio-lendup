var express = require('express');
var twilio = require('twilio');
var chrono = require('chrono-node');
var schedule = require('node-schedule');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOHQ_URL);

var router = express.Router();
var tclient = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//TODO:: DOCUMENT THIS
var number = process.env.PHONE_NUM || '+15097403508';
/* GET home page. */

var Call = mongoose.model('Call',
    {to: String,
        from: String,
        when: Date,
        sid: String,
        number_requested: String,
        status: String });

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

router.post('/start_call', function (req, res) {
    var when = chrono.parseDate(req.param(['when']));
    schedule.scheduleJob(when, function () {
        c = new Call({
            to: req.param(['number']),
            from: number
        })
        var promise = tclient.makeCall({
            to: req.param(['number']),
            from: number,
            url: 'https://twilio-lendup.herokuapp.com/twiml/call'
        });

        promise.then(function (call) {
            res.send('Call success SID: ' + call.sid);
            c.sid = call.sid;
            c.status = "In progress";
            c.save();
            console.log('Call success! Call SID: ' + call.sid);
        }, function (error) {
            console.error('Call failed!  Reason: ' + error.message);
            c.status = "Failed" + error.message;
            c.save();
            res.send('shits broken Reason:' + error.message);
        });
    });

});

module.exports = router;
