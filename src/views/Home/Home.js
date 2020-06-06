import React, { Component, useEffect } from "react";

import {
  Title,
  Header,
  AddTaskButton,
  TaskList,
  Filter,
  Signin,
  Signup,
  Topbar,
} from "./components";
import { Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./components/parent.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
  },
  paper: {
    marginTop: "4%",
    width: "100%",
    height: "100%",
  },
  span: {
    margin: "0.9ch",
  },
}));

function Home(props) {
  const [filters, setFilters] = React.useState([]);
  const classes = useStyles();

  const FilterAdd = (fil) => {
    console.log([fil]);
    let nfil = filters;
    nfil = nfil.concat([fil]);
    console.log(nfil);
    setFilters(nfil);
  };

  const FilterDel = (fil) => {
    console.log(fil);
    let nfil = [...filters];
    console.log(nfil);
    for (var i = 0; i < nfil.length; i++) {
      if (JSON.stringify(nfil[i]) == JSON.stringify(fil)) {
        console.log("asdasddas");
        nfil.splice(i, 1);
        break;
      }
    }

    console.log(nfil);
    setFilters(nfil);
  };
  return (
    <div>
      <Topbar />
      <Signin signUP={props.signUP} signIN={props.signIN} />
      <Grid container style={({ width: "100%" }, { flexgrow: 1 })}>
        <Hidden mdDown>
          <Grid item md={5}>
            <Filter add={FilterAdd} del={FilterDel} />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.paper}>
            Title
            <TaskList
              characterData={props.characterData}
              filters={filters}
              removeCharacter={props.removeCharacter}
              modify={props.modify}
            />
            <AddTaskButton
              handleSubmit={props.handleSubmit}
              filters={filters}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
