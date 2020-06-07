import React, { Component, useEffect } from "react";

import {
  AddTaskButton,
  TaskList,
  Filter,
  Signin,
  Signup,
  Topbar,
  MobileFilterButton,
} from "./components";
import { Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./components/parent.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
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
  filter: {},
}));

function Home(props) {
  const [filters, setFilters] = React.useState([]);
  const theme = useTheme();
  const contentwidth = useMediaQuery(theme.breakpoints.down("md"));
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
      <Topbar
        userData={props.userData}
        signUP={props.signUP}
        signIN={props.signIN}
        signOUT={props.signOUT}
      />
      <Signin
        signUP={props.signUP}
        signIN={props.signIN}
        loginflag={props.loginflag}
      />
      <Grid container style={({ width: "100%" }, { flexgrow: 1 })}>
        <Hidden mdDown>
          <Grid item md={5}>
            <Filter add={FilterAdd} del={FilterDel} />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          {/* Title */}
          {!contentwidth ? (
            <Paper elevation={3} className={classes.paper}>
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
              <ListItem>
                <Typography variant="overline">
                  &nbsp;&nbsp;Instructions, meaning of symbols are available in
                  Help (Top bar).
                </Typography>
              </ListItem>
            </Paper>
          ) : (
            <div>
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
              <ListItem>
                <Typography variant="overline">
                  &nbsp;&nbsp;help is available in Top bar, if required, Thank
                  you !
                </Typography>
              </ListItem>
            </div>
          )}
        </Grid>
      </Grid>
      <Hidden mdUp>
        <MobileFilterButton
          add={FilterAdd}
          del={FilterDel}
        ></MobileFilterButton>
      </Hidden>
    </div>
  );
}

export default Home;
