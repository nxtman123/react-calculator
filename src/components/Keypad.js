import React, { Component, Fragment } from 'react';

import "../App.css";

import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';

class Keypad extends Component {
    render() {
        return (
            <Fragment>
                <Button variant="contained" className="calc-back-key">
                    <BackspaceIcon />
                </Button>
                <Button variant="contained" className="calc-ans-key">
                    <span className="calc-key-text">ans</span>
                </Button>
                <Button variant="contained" color="primary" className="calc-clear-key">
                    <span className="calc-key-text">C</span>
                </Button>
                <Button variant="contained" className="calc-left-paren-key">
                    <span className="calc-key-text">(</span>
                </Button>
                <Button variant="contained" className="calc-right-paren-key">
                    <span className="calc-key-text">)</span>
                </Button>
                <Button variant="contained" className="calc-div-key">
                    <span className="calc-key-text">&divide;</span>
                </Button>
                <Button variant="contained" className="calc-mult-key">
                    <span className="calc-key-text">&times;</span>
                </Button>
                <Button variant="contained" className="calc-7-key">
                    <span className="calc-key-text">7</span>
                </Button>
                <Button variant="contained" className="calc-8-key">
                    <span className="calc-key-text">8</span>
                </Button>
                <Button variant="contained" className="calc-9-key">
                    <span className="calc-key-text">9</span>
                </Button>
                <Button variant="contained" className="calc-sub-key">
                    <span className="calc-key-text">&minus;</span>
                </Button>
                <Button variant="contained" className="calc-4-key">
                    <span className="calc-key-text">4</span>
                </Button>
                <Button variant="contained" className="calc-5-key">
                    <span className="calc-key-text">5</span>
                </Button>
                <Button variant="contained" className="calc-6-key">
                    <span className="calc-key-text">6</span>
                </Button>
                <Button variant="contained" className="calc-add-key">
                    <span className="calc-key-text">+</span>
                </Button>
                <Button variant="contained" className="calc-1-key">
                    <span className="calc-key-text">1</span>
                </Button>
                <Button variant="contained" className="calc-2-key">
                    <span className="calc-key-text">2</span>
                </Button>
                <Button variant="contained" className="calc-3-key">
                    <span className="calc-key-text">3</span>
                </Button>
                <Button variant="contained" className="calc-0-key">
                    <span className="calc-key-text">0</span>
                </Button>
                <Button variant="contained" className="calc-period-key">
                    <span className="calc-key-text">.</span>
                </Button>
                <Button variant="contained" color="primary" className="calc-equal-key">
                    <span className="calc-key-text">=</span>
                </Button>
            </Fragment>
        );
    }
}

export default Keypad;
