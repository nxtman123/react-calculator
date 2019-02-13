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
        ans: 0
    }

    clearKey = () => {
        this.setState({
            expression: []
        });
    }

    backKey = () => {
        let expression = [...this.state.expression];
        expression.pop();
        this.setState({
            expression
        });
    }

    typeKey = (value) => () => {
        let expression = [...this.state.expression];
        expression.push(value);
        this.setState({
            expression
        });
    }
}

export default App;
