/**
 *
 * Tests for fizzbuzzer
 * Created by Eric on 7/13/2014.
 */
var fb = require('../lib/fizzBuzz');
//noinspection JSUnusedGlobalSymbols
var should = require('should');

describe("#fizzBuzzify", function () {
    it('should return the number when the number is not a multiple of 3 or 5', function () {
        fb.fizzBuzzify(0).should.equal(0);
        fb.fizzBuzzify(2).should.equal(2);
        fb.fizzBuzzify(1).should.equal(1);
        fb.fizzBuzzify(11).should.equal(11);
    });

    it('should return fizz on multiples of 3', function () {
        fb.fizzBuzzify(3).should.equal('fizz');
        fb.fizzBuzzify(6).should.equal('fizz');
    });

    it('should return buzz on multiples of 5', function () {
        fb.fizzBuzzify(5).should.equal('buzz');
        fb.fizzBuzzify(10).should.equal('buzz');
    });

    it('should return fizzbuzz on multiples of 5 and 3', function () {
        fb.fizzBuzzify(15).should.equal('fizzbuzz');
        fb.fizzBuzzify(30).should.equal('fizzbuzz');
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
