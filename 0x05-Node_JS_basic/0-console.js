/** prints in STDOUT the string argument.
 *
 * @params -
 * message: string to check
 */

const displayMessage = (message) => {
    if (!message) {
        console.log("No message found");
    }
    console.log(message);
};

module.exports = displayMessage;
