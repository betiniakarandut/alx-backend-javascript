const calculateNumber = require('./2-calcul_chai.js');
var chai = require("chai")
var expect = chai.expect

describe("Test SUM", function(){
    it('Test the type "SUM"', function() {
        expect(calculateNumber('SUM', 1, 3)).to.be.equal(4)
    });
    it('Test the type "SUM"', function() {
        expect(calculateNumber('SUM', 1, 3.7)).to.be.equal(5)
    });
    it('Test the type "SUM"', function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.be.equal(5)
    });
});

describe("Test SUBTRACT", function(){
    it('Test the type "SUBTACT"', function() {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2)
    });
    it('Test the type "SUBTACT"', function() {
        expect(calculateNumber('SUBTRACT', 3.7, 1)).to.be.equal(3)
    });
    it('Test the type "SUBTRACT"', function() {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.be.equal(-3)
    });
});

describe("Test DIVIDE", function(){
    it('Test the type "DIVIDE"', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
    });
    it('Test the type "DIVIDE"', function() {
        expect(calculateNumber('DIVIDE', 1, 1)).equal(1)
    });
    it('Test the type "DIVIDE"', function() {
        expect(calculateNumber('DIVIDE', 0, 3.7)).to.be.equal(0)
    });
    it('Test the type "DIVIDE"', function() {
        expect(calculateNumber('DIVIDE', 3.4, 0)).to.be.equal(`'Error'`)
    });
});