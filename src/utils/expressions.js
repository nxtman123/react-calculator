import {Decimal} from 'decimal.js';

const resolveExpression = (expression, ans) => {
    console.log(expression.join());
    expression = condenseFloats(expression);
    console.log(expression.join());
    return 0;
}

const condenseFloats = (expression) => {
    let result = [];
    let num = [];
    for (let token of expression) {
        if (Number.isInteger(token) || token === ".") {
            num.push(token);
        } else {
            if (num.length !== 0) {
                result.push(Decimal(num.join("")));
                num = [];
            }
            result.push(token);
        }
    }
    if (num.length !== 0) {
        result.push(Decimal(num.join("")));
        num = [];
    }
    return result;
}

export {
    resolveExpression
};
