const payment = require('./3-payment.js');
const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js')
const sendPayment = payment.sendPaymentRequestToApi;
const sinon = require("sinon");
const chai = require("chai")
const expect = chai.expect

describe("sendPaymentRequestToApi", function() {
    it("Spy sendPaymentRequestToApi", function() {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20)

        expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;
        spy.restore();

    })
});