import React, { Component } from "react";

import {
  Title,
  Header,
  AddTaskButton,
  TaskList,
  Filter
} from './components';
import { Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),

  },
  paper: {
    marginTop: '4%',
    width: "100%",
    height: "100%",
  }

}));
function Home(props) {
  const classes = useStyles();
  return (
    <Grid container style={({ width: "100%" }, { flexgrow: 1 })} >
      <Hidden mdDown>
        <Grid item md={5}>
          <Filter />
        </Grid>
      </Hidden>
      {/* <Header /> */}
      {/* <Title /> */}
      {/* <Table characterData={characters} removeCharacter={this.removeCharacter} /> */}

      <Grid item xs={12} md={6}>
        <Paper elevation={3} className={classes.paper}>
          Title
          <TaskList
            characterData={props.characterData}
            removeCharacter={props.removeCharacter}
            modify={props.modify}
          />
          <AddTaskButton handleSubmit={props.handleSubmit} />

        </Paper>
      </Grid>
      {/* <Hidden mdDown>
        <Grid md={6}>
          <Card />
        </Grid>
      </Hidden> */}

    </Grid>
  );

}

export default Home;
