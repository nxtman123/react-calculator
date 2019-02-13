import React, { Fragment } from 'react';

import "../App.css";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Keypad = (props) => (
    <Fragment>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-ans-key" onClick={props.typeKey("Ans")}>
            Ans
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-back-key" onClick={props.backKey}>
            <Icon fontSize="inherit">backspace</Icon>
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} color="primary" className="calc-clear-key" onClick={props.clearKey}>
            Clear
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-paren" }} className="calc-left-paren-key" onClick={props.typeKey("(")}>
            (
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-paren" }} className="calc-right-paren-key" onClick={props.typeKey(")")}>
            )
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-symbol" }} className="calc-div-key" onClick={props.typeKey(" ÷ ")}>
            ÷
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-symbol" }} className="calc-mult-key" onClick={props.typeKey(" × ")}>
            ×
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-7-key" onClick={props.typeKey(7)}>
            7
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-8-key" onClick={props.typeKey(8)}>
            8
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-9-key" onClick={props.typeKey(9)}>
            9
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-symbol" }} className="calc-sub-key" onClick={props.typeKey(" − ")}>
            −
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-4-key" onClick={props.typeKey(4)}>
            4
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-5-key" onClick={props.typeKey(5)}>
            5
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-6-key" onClick={props.typeKey(6)}>
            6
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-symbol" }} className="calc-add-key" onClick={props.typeKey(" + ")}>
            +
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-1-key" onClick={props.typeKey(1)}>
            1
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-2-key" onClick={props.typeKey(2)}>
            2
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-3-key" onClick={props.typeKey(3)}>
            3
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-0-key" onClick={props.typeKey(0)}>
            0
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-text" }} className="calc-period-key" onClick={props.typeKey(".")}>
            .
        </Button>
        <Button variant="contained" classes={{ label: "calc-key-symbol" }} color="primary" className="calc-equal-key" onClick={props.equalKey}>
            =
        </Button>
    </Fragment>
);

export default Keypad;
