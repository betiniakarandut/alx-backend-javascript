/** Returns rounded sum of a and b
 * @param
 * type: type of arithmetic operation
 * a and b: values to check
 */

function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        add = Math.round(a) + Math.round(b);
        return add;
    }
    if (type === 'SUBTRACT') {
        subtract = Math.round(a) - Math.round(b);
        return subtract;
    }
    if (type === 'DIVIDE') {
        if (Math.round(b) === 0){
            return`'Error'`;
        }
        divide = Math.round(a) / Math.round(b);
        return divide;
    }
}

module.exports = calculateNumber;