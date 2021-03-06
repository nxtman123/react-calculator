import React, { Component } from 'react';

import "../App.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Display extends Component {
    render() {
        return (
            <Paper className="calc-display">
                <Typography className="display-prev-line">
                    {this.prevLine()}
                </Typography>
                <Typography variant="h3" className="display-main-line">
                    {this.mainLine()}
                    <span className="implied-parens">{this.implParens()}</span>
                </Typography>
            </Paper>
        );
    }

    prevLine = () => {
        if (this.props.result !== undefined) {
            return this.textExpression() + " =";
        } else {
            return "Ans = " + this.props.ans;
        }
    }

    textExpression = () => {
        if (this.props.userExpression.length === 0) {
            return "0";
        }
        return this.props.userExpression.join("");
    }

    mainLine = () => {
        if (this.props.result !== undefined) {
            if (isNaN(this.props.result)) {
                return "Error";
            }
            return this.props.result;
        } else {
            return this.textExpression();
        }
    }

    implParens = () => {
        if (this.props.result === undefined && this.props.openParens) {
            return " " + ")".repeat(this.props.openParens);
        }
    }
}

export default Display;
