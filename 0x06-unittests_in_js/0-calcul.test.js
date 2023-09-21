const calculateNumber = require('./0-calcul.js');
var assert = require('assert')

describe("calculateNumber", function(){
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(1, 3), 4)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(1, 3.7), 5)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(0.000005, 0.00009), 0)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(21.015, 3.5000), 25)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(15.30, 14.5), 30)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(19.5, 0.3), 20)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(1001.2, 1.5), 1003)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(0.5, 0.5), 2)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(9.6, 0.5), 11)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(2.0065, 0.9), 3)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(10.234, 1.72), 12)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(0.0, 0.0), 0)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(0.9, 0.1), 1)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(0.1, 0.4), 0)
    });
    it('Test the calculateNumber function', function() {
        assert.equal(calculateNumber(2.0, 0), 2)
    });
});