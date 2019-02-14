const resolveExpression = (userExpression, ans) => {
    let result;
    if (userExpression.length === 0) {
        return 0;
    }
    userExpression = condenseFloats(userExpression);
    userExpression = translateSymbols(userExpression, ans);
    userExpression = implicitMultiplication(userExpression);
    userExpression = userExpression.join("");
    try {
        // eslint-disable-next-line
        result = eval(userExpression);
        if (result === undefined) {
            result = NaN;
        }
    } catch(error) {
        result = NaN;
    }
    return result;
}

const condenseFloats = (userExpression) => {
    let result = [];
    let num = [];
    for (let token of userExpression) {
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

const translateSymbols = (userExpression, ans) => {
    for (let i=0; i < userExpression.length; i++) {
        if (userExpression[i] === " − ") {
            userExpression[i] = " - ";
        } else if (userExpression[i] === " × ") {
            userExpression[i] = " * ";
        } else if (userExpression[i] === " ÷ ") {
            userExpression[i] = " / ";
        } else if (userExpression[i] === "Ans") {
            userExpression[i] = ans;
        }
    }
    return userExpression;
}

const implicitMultiplication = (userExpression) => {
    let result = [];
    for (let i=0; i < userExpression.length; i++) {
        result.push(userExpression[i]);
        if ((!isNaN(userExpression[i]) || userExpression[i] === ")" || userExpression[i] === "Ans") &&
            (!isNaN(userExpression[i+1]) || userExpression[i+1] === "(" || userExpression[i+1] === "Ans")
        ) {
            result.push(" * ");
        }
    }
    return result;
}

export {
    resolveExpression
};
