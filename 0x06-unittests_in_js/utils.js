/**
 * Utils module
 * @property
 * calculateNumber
 */

Utils = {}

Utils.calculateNumber = function calculateNumber(type, arg1, arg2) {
    if (type === 'SUM') {
        add = Math.round(arg1) + Math.round(arg2);
        return add;
    }
    if (type === 'SUBTRACT') {
        subtract = Math.round(arg1) - Math.round(arg2);
        return subtract;
    }
    if (type === 'DIVIDE') {
        if (Math.round(arg2) === 0){
            return`'Error'`;
        }
        divide = Math.round(arg1) / Math.round(arg2);
        return divide;
    }
}

// console.log(Utils.calculateNumber('DIVIDE', 50, 20))

module.exports = Utils