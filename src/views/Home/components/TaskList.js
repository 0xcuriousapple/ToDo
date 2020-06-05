import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TaskChipLabel from "./TaskChipLabel";
import TaskChipDate from "./TaskChipDate";
import TaskChipStatus from "./TaskChipStatus";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Typography as MuiTypography, Hidden } from '@material-ui/core';
import TaskContent from './TaskContent';
import TaskPriorityIcon from './TaskPriorityIcon';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  task: {
    fontWeight: "bold"
  },
  label: {
    textAlign: "left"
  }
}));

export default function TaskList(props) {

  const { characterData: characters } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [list, setList] = React.useState(props.characterData);
  const [filters, setFilters] = React.useState(props.filters);

  const handleToggle = (value, index) => () => {
    const currentIndex = list.indexOf(value);
    const newChecked = [...list];

    if (currentIndex === -1) {
      newChecked.push(value);
      props.removeCharacter(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setList(newChecked);
  };

  const handleModify = (index, id, value) => {
    console.log(id);
    props.modify(index, id, value);
    const newlist = [...list];
    newlist[index][id] = value;
    setList(newlist)
  };


  useEffect(() => {
    setList(props.characterData);
  }, [props.characterData]);

  useEffect(() => {
    setFilters(props.filters);
  }, [props.filters]);

  return (
    <Grid container xs={12}>
      <List dense className={classes.root}>


        {props.characterData.map((row, index) => {
          const labelId = `checkbox-list-secondary-label-${row.task}`;
          let flag = 1;
          for (var filter in filters) {
            let value = filters[filter]
            if (row[filter] != value) {
              flag = 0;
              break;
            }
          }
          if (flag == 1) {
            return (
              <ListItem key={index} button>
                <TaskPriorityIcon priority={row.priority} modify={handleModify} index={index} />
                <TaskChipStatus status={row.status} modify={handleModify} index={index} />

                <Grid item xs={10}>
                  <MuiTypography variant="h5" >
                    <ListItemText
                      id={labelId}
                      style={{ marginLeft: "2ch" }}
                      disableTypography="true"
                    >

                      <TaskContent task={row.task} index={index} modify={handleModify} />

                    </ListItemText>
                  </MuiTypography>
                </Grid>
                <TaskChipLabel label={row.label} modify={handleModify} index={index} />
                <TaskChipDate date={row.date} modify={handleModify} index={index} />
                <IconButton aria-label="delete" size="small" onClick={handleToggle(row.task, index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Grid>
  );
}


{/* <Hidden mdDown>
          <ListItem>
            <MuiTypography variant="body2" >
              Status
         </MuiTypography>
            <Grid item xs={10}>
              <MuiTypography variant="body2" >
                <ListItemText

                  style={{ marginLeft: "2ch" }}
                  disableTypography="true"
                >
                  Tasks
              </ListItemText>
              </MuiTypography>
            </Grid>

            <MuiTypography variant="caption" className={classes.label}>
              {'Label & Duedate'}
            </MuiTypography>

          </ListItem>  </Hidden> */}