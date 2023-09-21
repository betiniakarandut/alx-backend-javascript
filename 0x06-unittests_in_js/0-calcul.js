/** Returns rounded sum of arg1 and arg2
 * @param
 * arg1 and arg2: values to check
 */

function calculateNumber(arg1, arg2) {
    result = Math.round(arg1) + Math.round(arg2)
    return result
}

module.exports = calculateNumber;
// console.log(calculateNumber(1.5, 3.7));