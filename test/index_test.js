/**
 *
 * Tests for fizzbuzzer
 * Created by Eric on 7/13/2014.
 */
var fb = require('../lib/fizzBuzz');
//noinspection JSUnusedGlobalSymbols
var should = require('should');
describe("fizzbuzz", function () {
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

    describe("#fizzBuzz", function () {
        it('should return a array of spec length', function () {
            fb.fizzBuzz(3).should.have.lengthOf(3);
        });

        it('should give fizzbuzzes up to spec number', function () {
            fb.fizzBuzz(1).should.containDeep([1]);
            fb.fizzBuzz(2).should.containDeep([1, 2]);
            fb.fizzBuzz(3).should.containDeep([1, 2, 'fizz']);
            fb.fizzBuzz(15).should.containDeep([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
        });
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
