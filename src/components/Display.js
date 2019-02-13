import React, { Component } from 'react';

import "../App.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Display extends Component {
    render() {
        return (
            <Paper className="calc-display">
                <Typography className="display-prev-line">
                    {this.props.prev}
                </Typography>
                <Typography variant="h4" className="display-main-line">
                    {this.props.main}
                </Typography>
            </Paper>
        );
    }
}

export default Display;
