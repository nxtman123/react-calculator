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
        showingResult: false,
        expression: [],
        openParens: 0,
        ans: 0
    }

    clearKey = () => {
        this.setState({
            expression: [],
            showingResult: false
        });
    }

    backKey = () => {
        let expression = [...this.state.expression];
        let openParens = this.state.openParens;
        let value = expression.pop();
        if (value === ")") {
            openParens += 1;
        } else if (value === "(") {
            openParens -= 1;
        }
        this.setState({
            expression,
            openParens
        });
    }

    typeKey = (value) => () => {
        let expression = [...this.state.expression];
        let openParens = this.state.openParens;
        let lastToken = expression[expression.length - 1];
        if ([" + ", " × ", " ÷ "].indexOf(value) !== -1) {
            if (expression.length === 0) {
                expression = [0];
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
                while (Number.isInteger(expression[expression.length - i])) {
                    i += 1;
                }
                if (expression[expression.length - i] === ".") {
                    return;
                }
            }
        }
        expression.push(value);
        this.setState({
            expression,
            openParens
        });
    }

    equalKey = () => {
        let expression = [...this.state.expression];
        let openParens = this.state.openParens;
        while (openParens > 0) {
            expression.push(")");
            openParens -= 1;
        }
        this.setState({
            showingResult: true,
            expression,
            openParens,
            ans: resolveExpression(expression, this.state.ans)
        })
    }
}

export default App;
