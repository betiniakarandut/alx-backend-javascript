// prints in STDOUT the string argument.

const displayMessage = (message) => {
    if (!message) {
        console.log("No message found");
    }
    console.log(message);
}

module.exports = displayMessage;
