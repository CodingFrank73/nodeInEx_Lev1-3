
function calc(numA, numB, operator) {

    if (operator === "+") {
        return numA + numB
    }
    if (operator === "-") {
        return numA - numB
    }
    if (operator === "*") {
        return numA * numB
    }
    if (operator === "/") {
        if (numA === 0 || numB === 0) {
            return "Division durch 0 nicht möglich"
        } else {
            return numA / numB
        }
    }
}
module.exports = { calc }