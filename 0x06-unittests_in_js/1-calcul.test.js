const calculateNumber = require('./1-calcul.js');
var assert = require('assert')

describe("Test SUM", function(){
    it('Test the type "SUM"', function() {
        assert.equal(calculateNumber('SUM', 1, 3), 4)
    });
    it('Test the type "SUM"', function() {
        assert.equal(calculateNumber('SUM', 1, 3.7), 5)
    });
    it('Test the type "SUM"', function() {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5)
    });
});

describe("Test SUBTRACT", function(){
    it('Test the type "SUBTACT"', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2)
    });
    it('Test the type "SUBTACT"', function() {
        assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3)
    });
    it('Test the type "SUBTRACT"', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3)
    });
});

describe("Test DIVIDE", function(){
    it('Test the type "DIVIDE"', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });
    it('Test the type "DIVIDE"', function() {
        assert.equal(calculateNumber('DIVIDE', 1, 1), 1)
    });
    it('Test the type "DIVIDE"', function() {
        assert.equal(calculateNumber('DIVIDE', 0, 3.7), 0)
    });
    it('Test the type "DIVIDE"', function() {
        assert.equal(calculateNumber('DIVIDE', 3.4, 0), `'Error'`)
    });
});