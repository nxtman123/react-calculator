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
                <Typography variant="h4" className="display-main-line">
                    {this.mainLine()}
                </Typography>
            </Paper>
        );
    }

    prevLine = () => {
        if (this.props.showingResult) {
            return this.textExpression() + " =";
        } else {
            return "Ans = " + this.props.ans;
        }
    }

    textExpression = () => {
        if (this.props.expression.length === 0) {
            return "0";
        }
        return this.props.expression.join("");
    }

    mainLine = () => {
        if (this.props.showingResult) {
            return this.props.ans;
        } else {
            return this.textExpression();
        }
    }
}

export default Display;