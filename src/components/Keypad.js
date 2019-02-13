import React, { Fragment } from 'react';

import "../App.css";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Keypad = (props) => (
    <Fragment>
        <Button
            variant="contained"
            classes={{ label: "calc-key-text" }}
            className="calc-ans-key calc-key-medium"
            onClick={props.typeKey("Ans")}
        >
            Ans
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-text" }}
            className="calc-back-key calc-key-dark"
            onClick={props.backKey}
        >
            <Icon fontSize="inherit">backspace</Icon>
        </Button>
        <Button
            variant="contained"
            color="primary"
            classes={{ label: "calc-key-text" }}
            className="calc-clear-key"
            onClick={props.clearKey}
        >
            Clear
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-paren" }}
            className="calc-left-paren-key calc-key-medium"
            onClick={props.typeKey("(")}
        >
            (
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-paren" }}
            className="calc-right-paren-key calc-key-medium"
            onClick={props.typeKey(")")}
        >
            )
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-symbol" }}
            className="calc-div-key calc-key-medium"
            onClick={props.typeKey(" ÷ ")}
        >
            ÷
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-symbol" }}
            className="calc-mult-key calc-key-medium"
            onClick={props.typeKey(" × ")}
        >
            ×
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-symbol" }}
            className="calc-sub-key calc-key-medium"
            onClick={props.typeKey(" − ")}
        >
            −
        </Button>
        <Button
            variant="contained"
            classes={{ label: "calc-key-symbol" }}
            className="calc-add-key calc-key-medium"
            onClick={props.typeKey(" + ")}
        >
            +
        </Button>
        <div className="calc-numpad">
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-7-key calc-key-light"
                onClick={props.typeKey(7)}
            >
                7
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-8-key calc-key-light"
                onClick={props.typeKey(8)}
            >
                8
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-9-key calc-key-light"
                onClick={props.typeKey(9)}
            >
                9
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-4-key calc-key-light"
                onClick={props.typeKey(4)}
            >
                4
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-5-key calc-key-light"
                onClick={props.typeKey(5)}
            >
                5
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-6-key calc-key-light"
                onClick={props.typeKey(6)}
            >
                6
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-1-key calc-key-light"
                onClick={props.typeKey(1)}
            >
                1
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-2-key calc-key-light"
                onClick={props.typeKey(2)}
            >
                2
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-3-key calc-key-light"
                onClick={props.typeKey(3)}
            >
                3
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-0-key calc-key-light"
                onClick={props.typeKey(0)}
            >
                0
            </Button>
            <Button
                variant="contained"
                classes={{ label: "calc-key-text" }}
                className="calc-period-key calc-key-light"
                onClick={props.typeKey(".")}
            >
                .
            </Button>
        </div>
        <Button
            variant="contained"
            color="primary"
            classes={{ label: "calc-key-symbol" }}
            className="calc-equal-key"
            onClick={props.equalKey}
        >
            =
        </Button>
    </Fragment>
);

export default Keypad;
