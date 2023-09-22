/**
 * Utils module
 * @property
 * calculateNumber
 */

Utils = {};

Utils.calculateNumber = function calculateNumber(type, a, b) {
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
            return (`'Error'`).toLowerCase();
        }
        divide = Math.round(a) / Math.round(b);
        return divide;
    }
    return 'Not Found';
}
// console.log(Utils.calculateNumber('SUM', 1.4, 4.5))
// console.log(Utils.calculateNumber('SUBTRACT', 1.4, 4.5))
// console.log(Utils.calculateNumber('DIVIDE', 1.4, 4.5))
// console.log(Utils.calculateNumber('DIVIDE', 1.4, 0))
module.exports = Utils