var Utils= require('./utils.js')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    result = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${result}`);
    return result;
}

// console.log(sendPaymentRequestToApi(50, 40))
module.exports = sendPaymentRequestToApi