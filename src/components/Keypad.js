import React, { Component, Fragment } from 'react';

import "../App.css";

import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';

const Keypad = (props) => (
    <Fragment>
        <Button variant="contained" className="calc-back-key" onClick={props.backKey}>
            <BackspaceIcon />
        </Button>
        <Button variant="contained" className="calc-ans-key" onClick={props.typeKey("Ans")}>
            <span className="calc-key-text">ans</span>
        </Button>
        <Button variant="contained" color="primary" className="calc-clear-key" onClick={props.clearKey}>
            <span className="calc-key-text">C</span>
        </Button>
        <Button variant="contained" className="calc-left-paren-key" onClick={props.typeKey("(")}>
            <span className="calc-key-text">(</span>
        </Button>
        <Button variant="contained" className="calc-right-paren-key" onClick={props.typeKey(")")}>
            <span className="calc-key-text">)</span>
        </Button>
        <Button variant="contained" className="calc-div-key" onClick={props.typeKey(" ÷ ")}>
            <span className="calc-key-text">÷</span>
        </Button>
        <Button variant="contained" className="calc-mult-key" onClick={props.typeKey(" × ")}>
            <span className="calc-key-text">×</span>
        </Button>
        <Button variant="contained" className="calc-7-key" onClick={props.typeKey(7)}>
            <span className="calc-key-text">7</span>
        </Button>
        <Button variant="contained" className="calc-8-key" onClick={props.typeKey(8)}>
            <span className="calc-key-text">8</span>
        </Button>
        <Button variant="contained" className="calc-9-key" onClick={props.typeKey(9)}>
            <span className="calc-key-text">9</span>
        </Button>
        <Button variant="contained" className="calc-sub-key" onClick={props.typeKey(" − ")}>
            <span className="calc-key-text">−</span>
        </Button>
        <Button variant="contained" className="calc-4-key" onClick={props.typeKey(4)}>
            <span className="calc-key-text">4</span>
        </Button>
        <Button variant="contained" className="calc-5-key" onClick={props.typeKey(5)}>
            <span className="calc-key-text">5</span>
        </Button>
        <Button variant="contained" className="calc-6-key" onClick={props.typeKey(6)}>
            <span className="calc-key-text">6</span>
        </Button>
        <Button variant="contained" className="calc-add-key" onClick={props.typeKey(" + ")}>
            <span className="calc-key-text">+</span>
        </Button>
        <Button variant="contained" className="calc-1-key" onClick={props.typeKey(1)}>
            <span className="calc-key-text">1</span>
        </Button>
        <Button variant="contained" className="calc-2-key" onClick={props.typeKey(2)}>
            <span className="calc-key-text">2</span>
        </Button>
        <Button variant="contained" className="calc-3-key" onClick={props.typeKey(3)}>
            <span className="calc-key-text">3</span>
        </Button>
        <Button variant="contained" className="calc-0-key" onClick={props.typeKey(0)}>
            <span className="calc-key-text">0</span>
        </Button>
        <Button variant="contained" className="calc-period-key" onClick={props.typeKey(".")}>
            <span className="calc-key-text">.</span>
        </Button>
        <Button variant="contained" color="primary" className="calc-equal-key">
            <span className="calc-key-text">=</span>
        </Button>
    </Fragment>
);

export default Keypad;
