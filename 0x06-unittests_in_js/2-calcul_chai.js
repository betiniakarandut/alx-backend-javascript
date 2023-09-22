/** Returns rounded sum of arg1 and arg2
 * @param
 * type: type of arithmetic operation
 * arg1 and arg2: values to check
 */

function calculateNumber(type, arg1, arg2) {
    if (type === 'SUM') {
        add = Math.round(arg1) + Math.round(arg2);
        return add;
    }
    if (type === 'SUBTRACT') {
        subtract = Math.round(arg1) - Math.round(arg2);
        return subtract
    }
    if (type === 'DIVIDE') {
        if (Math.round(arg2) === 0){
            return`'Error'`
        }
        divide = Math.round(arg1) / Math.round(arg2);
        return divide
    }
}

// console.log(calculateNumber('SUM', 1.4, 4.5))
// console.log(calculateNumber('SUBTRACT', 1.4, 4.5))
// console.log(calculateNumber('DIVIDE', 1.4, 4.5))
// console.log(calculateNumber('DIVIDE', 1.4, 0))
module.exports = calculateNumber;