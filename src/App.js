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
                    <Keypad />
                </Paper>
            </div>
        );
    }

    state = {
        showingResult: false,
        expression: [],
        ans: 0
    }
}

export default App;
