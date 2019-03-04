import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from '@material-ui/core/Tooltip';

export default class Hover extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          padding: "0",
          margin: "0",
          top: "50%",
          left: "95vw",

          width: "100%",
          height: "100%"
        }}
      >
        <Tooltip title="Add" placement="left">
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
  }
}
