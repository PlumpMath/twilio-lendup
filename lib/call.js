/**
 *
 * Created by Eric on 7/14/2014.
 */
var mongoose = require('mongoose');

exports.Call = mongoose.model('Call',
    {to: String,
        from: String,
        when: Date,
        sid: String,
        number_requested: String,
        status: String });
