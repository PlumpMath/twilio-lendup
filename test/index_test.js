/**
 *
 * Tests for fizzbuzzer
 * Created by Eric on 7/13/2014.
 */
var fb = require('../lib/fizzBuzz');

describe("#fizzBuzzify", function () {
    it('should return the number when the number is not a multiple of 3 or 5', function () {
        fb.fizzBuzzify(0).should.equal(0);
        fb.fizzBuzzify(2).should.equal(2);
        fb.fizzBuzzify(1).should.equal(1);
        fb.fizzBuzzify(11).should.equal(11);
    });
});
/*
 exports.testFizzBuzzify = function(test){
 test.expect(fb.fizzBuzzify(1), 1);
 test.expect(fb.fizzBuzzify(3), 'fizz');
 test.expect(fb.fizzBuzzify(5), 'buzz');
 test.expect(fb.fizzBuzzify(10), 'buzz');
 test.expect(fb.fizzBuzzify(15), 'fizzbuzz');

 }
 */
