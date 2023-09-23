const sendPaymentRequestToApi = require("./5-payment.js")
const{ expect } = require('chai');
const { beforeEach } = require("mocha");
const sinon = require("sinon") 

describe("Test 1 sendPaymentRequestToAPI", function() {
    let condition;

    beforeEach(function() {
        if (!condition) {
            condition = sinon.spy(console);
        }
    })
    
    afterEach(function() {
        condition.log.resetHistory();
    });

    it("Test 'The total is 120'", function() {
        sendPaymentRequestToApi(100, 20);
        expect(condition.log.calledWith("The total is: 120")).to.be.true;
        expect(condition.log.calledOnce).to.be.true;
    });

    it("Test 'The total is 20'", function() {
        sendPaymentRequestToApi(10, 10);
        expect(condition.log.calledWith("The total is: 20")).to.be.true;
        expect(condition.log.calledOnce).to.be.true;
    });
});
