const getPaymentTokenFromAPI = (success) => {
    if (success === true) {
        return new Promise((resolve, reject) => {
            resolve({data: 'Successful response from the API' });
        });
    }
    return;
}

module.exports = getPaymentTokenFromAPI;