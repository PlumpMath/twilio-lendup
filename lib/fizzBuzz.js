/**
 *
 * Created by Eric on 7/13/2014.
 */

exports.fizzBuzzify = function (number) {
    if (number % 3 == 0 && number % 5 == 0) {
        //noinspection SpellCheckingInspection
        return 'fizzbuzz';
    } else if (number % 3) {
        return 'fizz';
    } else if (number % 5) {
        return 'buzz';
    } else {
        return number;
    }
};

exports.fizzBuzz = function (upper) {
    rg = _.range(upper)

};
