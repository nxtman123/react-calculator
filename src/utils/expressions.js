const resolveExpression = (expression, ans) => {
    if (expression.length === 0) {
        return 0;
    }
    expression = condenseFloats(expression);
    expression = translateSymbols(expression, ans);
    expression = expression.join("");
    let result;
    try {
        // eslint-disable-next-line
        result = eval(expression);
        if (result === undefined) {
            result = NaN;
        }
    } catch(error) {
        result = NaN;
    }
    return result;
}

const condenseFloats = (expression) => {
    let result = [];
    let num = [];
    for (let token of expression) {
        if (Number.isInteger(token) || token === ".") {
            num.push(token);
        } else {
            if (num.length !== 0) {
                result.push(Number.parseFloat(num.join("")));
                num = [];
            }
            result.push(token);
        }
    }
    if (num.length !== 0) {
        result.push(Number.parseFloat(num.join("")));
        num = [];
    }
    return result;
}

const translateSymbols = (expression, ans) => {
    for (let i=0; i < expression.length; i++) {
        if (expression[i] === " − ") {
            expression[i] = " - ";
        } else if (expression[i] === " × ") {
            expression[i] = " * ";
        } else if (expression[i] === " ÷ ") {
            expression[i] = " / ";
        } else if (expression[i] === "Ans") {
            expression[i] = ans;
        }
    }
    return expression;
}

export {
    resolveExpression
};
