var Utils= require('./utils.js')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    result = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    return `The total is: ${result}`
}

module.exports = sendPaymentRequestToApi
// console.log(sendPaymentRequestToApi(50, 40))