import React, { Component } from 'react';

import "./App.css";

import Paper from "@material-ui/core/Paper";

import Display from "./components/Display.js";
import Keypad from "./components/Keypad.js";

import {resolveExpression} from "./utils/expressions.js";

class App extends Component {
    render() {
        return (
            <div className="calc-frame">
                <Paper className="calc-paper">
                    <div className="calc-label">
                        <span>Calculator <span>by Kurtis Jantzen</span></span>
                    </div>
                    <Display {...this.state} />
                    <Keypad
                        clearKey={this.clearKey}
                        backKey={this.backKey}
                        typeKey={this.typeKey}
                        equalKey={this.equalKey}
                    />
                </Paper>
            </div>
        );
    }

    state = {
        result: undefined,
        userExpression: [],
        openParens: 0,
        ans: 0
    }

    clearKey = () => {
        this.setState({
            result: undefined,
            userExpression: [],
            openParens: 0
        });
    }

    backKey = () => {
        let userExpression = [...this.state.userExpression];
        let openParens = this.state.openParens;
        let value = userExpression.pop();
        if (value === ")") {
            openParens += 1;
        } else if (value === "(") {
            openParens -= 1;
        }
        this.setState({
            userExpression,
            openParens
        });
    }

    typeKey = (value) => () => {
        let userExpression = [...this.state.userExpression];
        let openParens = this.state.openParens;
        let lastToken = userExpression[userExpression.length - 1];
        if (this.state.result !== undefined) {
            if ([" + ", " − ", " × ", " ÷ "].indexOf(value) !== -1) {
                userExpression = [this.state.ans];
            } else {
                userExpression = [];
            }
        }
        if ([" + ", " × ", " ÷ "].indexOf(value) !== -1) {
            if (userExpression.length === 0) {
                userExpression = [0];
            } else if(["(", " + ", " − ", " × ", " ÷ "].indexOf(lastToken) !== -1) {
                return;
            }
        } else if (value === " − ") {
            if ([" + ", " − ", " × ", " ÷ "].indexOf(lastToken) !== -1) {
                return;
            }
        } else if (value === ")") {
            if (openParens <= 0 || ["(", " + ", " − ", " × ", " ÷ "].indexOf(lastToken) !== -1) {
                return;
            }
            openParens -= 1;
        } else if (value === "(") {
            openParens += 1;
        } else if (value === ".") {
            if (lastToken === ".") {
                return;
            } else if (Number.isInteger(lastToken)) {
                let i = 2;
                while (Number.isInteger(userExpression[userExpression.length - i])) {
                    i += 1;
                }
                if (userExpression[userExpression.length - i] === ".") {
                    return;
                }
            }
        }
        userExpression.push(value);
        this.setState({
            result: undefined,
            userExpression,
            openParens
        });
    }

    equalKey = () => {
        let userExpression = [...this.state.userExpression];
        let openParens = this.state.openParens;
        let ans = this.state.ans;
        while (openParens > 0) {
            userExpression.push(")");
            openParens -= 1;
        }
        let result = resolveExpression(userExpression, this.state.ans);
        if (!isNaN(result)) {
            ans = result;
        }
        this.setState({
            result,
            userExpression,
            openParens,
            ans
        })
    }
}

export default App;
