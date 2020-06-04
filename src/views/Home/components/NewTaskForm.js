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
import KeyboardVoiceOutlinedIcon from '@material-ui/icons/KeyboardVoiceOutlined';
class NewTaskForm extends Component {
  initialState = {
    task: "",
    date: "Set Date",
    label: "Set Label",
    status: "new",
    open: false,
  };
  state = this.initialState;
  handleDateChange = (date) => {
    this.setState({ date: date });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  ChangeDateState = (date) => {
    this.setState({ date: date });
  };
  ChangeLabelState = (label) => {
    this.setState({ label: label });
    console.log(label);
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    return (
      <div class="margin">

        <Grid container style={({ width: "100%" }, { flexgrow: 1 })} >
          <Grid item xs={12}>
            <TextField
              id="Task"
              label="Task"
              variant="outlined"
              name="task"
              value={this.state.task}
              size="small"

              //margin="normal"
              style={{ width: "70%" }}
              onChange={this.handleChange}
            />
            {/* 
            <Box p={1} style={({ margin: "0px" }, { padding: "0px" })}>
              <Datepicker Change={this.ChangeDateState} />
            </Box>
            <Box p={1} style={({ margin: "0px" }, { padding: "0px" })}>
              <Labelpicker Change={this.ChangeLabelState} />
            </Box> */}

            <Fab
              color="primary"
              aria-label="add"
              onClick={this.submitForm}
              size="small"
              style={({ marginLeft: "1.5ch" })}
            >
              <AddIcon />
            </Fab>

            <Fab
              color="primary"
              aria-label="add"
              onClick={this.submitForm}
              size="small"
              style={({ marginLeft: "1.5ch" })}
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
