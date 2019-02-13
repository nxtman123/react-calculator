import React, { Component } from 'react';

import "./App.css";

import Paper from "@material-ui/core/Paper";

import Display from "./components/Display.js";
import Keypad from "./components/Keypad.js";

class App extends Component {
    render() {
        return (
            <div className="calc-frame">
                <Paper className="calc-paper">
                    <Display {...this.state} />
                    <Keypad
                        clearKey={this.clearKey}
                        backKey={this.backKey}
                        typeKey={this.typeKey}
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
            expression: []
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
        if (value === ")") {
            console.log(expression[expression.length - 1])
            if (openParens <= 0 || expression[expression.length - 1] === "(") {
                return
            };
            openParens -= 1;
        } else if (value === "(") {
            openParens += 1;
        }
        expression.push(value);
        this.setState({
            expression,
            openParens
        });
    }
}

export default App;
