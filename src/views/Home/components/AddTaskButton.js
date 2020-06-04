import React, { Component } from "react";
import NewTaskForm from "./NewTaskForm";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//using hooks in class comp https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component

class AddTaskButton extends Component {
  initialState = {
    task: "",
    viewform: true,
    viewadd1: false,
  };

  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    // this.props.handleSubmit(this.state);
    // this.setState(this.initialState);
  };
  buttonClick = (props) => {
    this.setState({ viewform: true });
    this.setState({ viewadd1: false });
  };

  render() {
    const { task } = this.state;
    const viewform = this.state.viewform;
    const viewadd1 = this.state.viewadd1;
    let form;
    let add1;
    if (viewform) {
      form = <NewTaskForm handleSubmit={this.props.handleSubmit} />;
    }
    if (viewadd1) {
      add1 = (
        <Fab color="primary" aria-label="add" onClick={this.buttonClick}>
          <AddIcon />
        </Fab>
      );
    }
    return (
      <div>
        {form}
        {add1}
      </div>
    );
  }
}
export default AddTaskButton;
