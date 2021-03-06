/**
 *
 * Created by Eric on 7/13/2014.
 */
var _ = require('underscore');

exports.fizzBuzzify = function (number) {
    if (number < 2) {
        return number;
    } else if (number % 3 == 0 && number % 5 == 0) {
        //noinspection SpellCheckingInspection
        return 'fizzbuzz';
    } else if (number % 3 == 0) {
        return 'fizz';
    } else if (number % 5 == 0) {
        return 'buzz';
    } else {
        return number;
    }
};

exports.fizzBuzz = function (upper) {
    rg = _.range(1, upper + 1, 1);
    return _.map(rg, exports.fizzBuzzify);
};
