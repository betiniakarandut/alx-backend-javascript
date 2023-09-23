const getPaymentTokenFromAPI = require('./6-payment_token.js')
const { expect } = require("chai");

describe.only('Test getPaymentTokenFromAPI', function(done) {
    it('Should return an async promise', function() {
        getPaymentTokenFromAPI(true, function(result) {
            expect(result).to.equal({data: 'Successful response from the API' })
            done();
        });
    });
    it('Should return an async promise', function(done) {
        getPaymentTokenFromAPI(false, function(result) {
            expect(result).to.equal({data: 'Successful response from the API' })
            done();
        });
    });
});
