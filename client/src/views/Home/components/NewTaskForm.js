import React, { Component } from "react";
import "date-fns";
import "./responsive.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Grid, Hidden } from "@material-ui/core";
import Datepicker from "./Datepicker";
import Labelpicker from "./Labelpicker";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import KeyboardVoiceOutlinedIcon from "@material-ui/icons/KeyboardVoiceOutlined";

class NewTaskForm extends Component {
  initialState = {
    task: "",
    date: "Set Date",
    label: "Set Label",
    status: "new",
    priority: "low",
  };
  state = this.initialState;

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };
  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    let date = [];
    let label = [];
    let status = [];
    let priority = [];

    for (var i = 0; i < this.props.filters.length; i++) {
      let obj = this.props.filters[i];
      switch (Object.keys(obj)[0]) {
        case "date":
          date.push(obj.date);
          break;
        case "label":
          {
            label.push(obj.label);
          }
          break;
        case "status":
          status.push(obj.status);
          break;
        case "priority":
          priority.push(obj.priority);
          break;
      }
    }

    // for (var i = 0; i < date.length; i++) {
    //   for (var j = 0; j < label.length; i++) {
    //     for (var k = 0; k < status.length; i++) {
    //       for (var l = 0; l < priority.length; i++) {
    //         console.log(label[i], priority[i], status[i], date[i]);
    //         //this.props.handleSubmit(this.state);
    //       }
    //     }
    //   }
    // }

    let t = this.state;
    if (label.length != 0) t.label = label[0];
    if (date.length != 0) t.date = date[0];
    if (status.length != 0) t.status = status[0];
    if (priority.length != 0) t.priority = priority[0];
    this.props.handleSubmit(t);
    this.setState(this.initialState);
    // this.props.handleSubmit(this.state);
    // this.setState(this.initialState);
  };
  UpdateWithFilter = () => {
    for (var i = 0; i < this.props.filters.length; i++) {
      this.setState(this.props.filters[i]);
    }
  };

  render() {
    return (
      <div class="margin">
        {/* {this.UpdateWithFilter} */}
        <Grid container style={({ width: "100%" }, { flexgrow: 1 })}>
          <Grid item xs={12}>
            <TextField
              id="Task"
              label="Task"
              variant="outlined"
              name="task"
              value={this.state.task}
              size="small"
              //margin="normal"
              style={{ width: "100%" }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={5}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={this.submitForm}
              size="small"
              style={({ marginLeft: "1.5ch" }, { alignItems: "flex-end" })}
            >
              <AddIcon />
            </Fab>

            <Fab
              color="primary"
              aria-label="add"
              onClick={this.submitForm}
              size="small"
              style={{ marginLeft: "1.5ch" }}
            >
              <KeyboardVoiceOutlinedIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default NewTaskForm;
