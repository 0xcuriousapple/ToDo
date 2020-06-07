import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import WorkIcon from "@material-ui/icons/Work";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import DoneIcon from "@material-ui/icons/Done";
import CachedIcon from "@material-ui/icons/Cached";
import PriorityIcon from "./TaskPriorityIconFilter";
import { Grid, Hidden } from "@material-ui/core";
import DatePickFilter from "./DatePickerFilter";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(0.7),
  },
  filterclass: {},
  chips: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
  },
  chipselected: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
    background: "#3f51b5",
    color: "white",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));

export default function Filter(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Grid item md={12} className={classes.filterclass}>
            <Typography variant="h6">Labels :</Typography>
            {props.filters.Personal ? (
              <Chip
                icon={<FaceOutlinedIcon />}
                size="small"
                label="Personal"
                color="primary"
                onClick={() => props.handleClick({ label: "Personal" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<FaceOutlinedIcon />}
                variant="outlined"
                size="small"
                label="Personal"
                color="primary"
                onClick={() => props.handleClick({ label: "Personal" })}
                className={classes.chips}
              />
            )}
            {props.filters.Work ? (
              <Chip
                icon={<WorkOutlineOutlinedIcon />}
                size="small"
                label="Work"
                color="primary"
                onClick={() => props.handleClick({ label: "Work" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<WorkOutlineOutlinedIcon />}
                variant="outlined"
                size="small"
                label="Work"
                color="primary"
                onClick={() => props.handleClick({ label: "Work" })}
                className={classes.chips}
              />
            )}
            {props.filters.Shopping ? (
              <Chip
                icon={<ShoppingCartOutlinedIcon />}
                size="small"
                label="Shopping"
                color="primary"
                onClick={() => props.handleClick({ label: "Shopping" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<ShoppingCartOutlinedIcon />}
                size="small"
                variant="outlined"
                label="Shopping"
                color="primary"
                onClick={() => props.handleClick({ label: "Shopping" })}
                className={classes.chips}
              />
            )}
            {props.filters.Others ? (
              <Chip
                size="small"
                label="Others"
                color="primary"
                onClick={() => props.handleClick({ label: "Others" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                variant="outlined"
                size="small"
                label="Others"
                color="primary"
                onClick={() => props.handleClick({ label: "Others" })}
                className={classes.chips}
              />
            )}
            {/* <Chip icon={<AddIcon />} variant="outlined" size="small" label="Add label" color="secondary" onClick={() => props.handleClick({ label: 'Personal' })} className={classes.chips} /> */}
          </Grid>
        </ListItem>
        <ListItem>
          <Grid item md={12} className={classes.filterclass}>
            <Typography variant="h6">Priority :</Typography>
            {props.filters.high ? (
              <Chip
                icon={<PriorityIcon color="high" />}
                size="small"
                label="High"
                color="primary"
                onClick={() => props.handleClick({ priority: "high" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<PriorityIcon color="high" />}
                variant="outlined"
                size="small"
                label="High"
                color="primary"
                onClick={() => props.handleClick({ priority: "high" })}
                className={classes.chips}
              />
            )}
            {props.filters.medium ? (
              <Chip
                icon={<PriorityIcon color="medium" />}
                size="small"
                label="Medium"
                color="primary"
                onClick={() => props.handleClick({ priority: "medium" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<PriorityIcon color="medium" />}
                variant="outlined"
                size="small"
                label="Medium"
                color="primary"
                onClick={() => props.handleClick({ priority: "medium" })}
                className={classes.chips}
              />
            )}
            {props.filters.low ? (
              <Chip
                icon={<PriorityIcon color="low" />}
                size="small"
                label="Low"
                color="primary"
                onClick={() => props.handleClick({ priority: "low" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<PriorityIcon color="low" />}
                variant="outlined"
                size="small"
                label="Low"
                color="primary"
                onClick={() => props.handleClick({ priority: "low" })}
                className={classes.chips}
              />
            )}
          </Grid>
        </ListItem>
        <ListItem>
          <Grid item md={12} className={classes.filterclass}>
            <Typography variant="h6">Status :</Typography>
            {props.filters.new ? (
              <Chip
                icon={<FiberNewOutlinedIcon />}
                size="small"
                label="New"
                color="primary"
                onClick={() => props.handleClick({ status: "new" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<FiberNewOutlinedIcon />}
                size="small"
                variant="outlined"
                label="New"
                color="primary"
                onClick={() => props.handleClick({ status: "new" })}
                className={classes.chips}
              />
            )}
            {props.filters.inprogress ? (
              <Chip
                icon={<CachedIcon />}
                size="small"
                label="In progress"
                color="primary"
                onClick={() => props.handleClick({ status: "inprogress" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<CachedIcon />}
                variant="outlined"
                size="small"
                label="In progress"
                color="primary"
                onClick={() => props.handleClick({ status: "inprogress" })}
                className={classes.chips}
              />
            )}
            {props.filters.completed ? (
              <Chip
                icon={<DoneIcon />}
                size="small"
                label="Completed"
                color="primary"
                onClick={() => props.handleClick({ status: "completed" })}
                className={classes.chips}
              />
            ) : (
              <Chip
                icon={<DoneIcon />}
                variant="outlined"
                size="small"
                label="Completed"
                color="primary"
                onClick={() => props.handleClick({ status: "completed" })}
                className={classes.chips}
              />
            )}
          </Grid>
        </ListItem>
        <ListItem>
          <Grid item md={12} className={classes.filterclass}>
            <Typography variant="h6">Date :</Typography>
            {props.filters.today ? (
              <Chip
                size="small"
                label="Today"
                color="primary"
                onClick={() =>
                  props.handleClickToday({ date: props.props.getToday() })
                }
                className={classes.chips}
              />
            ) : (
              <Chip
                variant="outlined"
                size="small"
                label="Today"
                color="primary"
                onClick={() =>
                  props.handleClickToday({ date: props.getToday() })
                }
                className={classes.chips}
              />
            )}
            {props.filters.tom ? (
              <Chip
                size="small"
                label="Tomorrow"
                color="primary"
                onClick={() =>
                  props.handleClickTom({ date: props.getTomorrow() })
                }
                className={classes.chips}
              />
            ) : (
              <Chip
                variant="outlined"
                size="small"
                label="Tomorrow"
                color="primary"
                onClick={() =>
                  props.handleClickTom({ date: props.getTomorrow() })
                }
                className={classes.chips}
              />
            )}
            {props.filters.seldate ? (
              <Chip
                size="small"
                label="Selected date"
                color="primary"
                onClick={() =>
                  props.handleClickSelectedDate({
                    date: props.selecteddatefilter,
                  })
                }
                className={classes.chips}
              />
            ) : (
              <Chip
                variant="outlined"
                size="small"
                label="Selected date"
                color="primary"
                onClick={() =>
                  props.handleClickSelectedDate({
                    date: props.selecteddatefilter,
                  })
                }
                className={classes.chips}
              />
            )}
          </Grid>
        </ListItem>
        <ListItem>
          <Grid item md={12} className={classes.filterclass}>
            <DatePickFilter handledatepick={props.handledatepick} />
          </Grid>
        </ListItem>
      </List>
      {/* <TaskChipDate
          date="Set Date"
          modify={handleModify}
          index="0"
          style={{ margin: "1.5ch" }}
        /> */}
    </div>
  );
}
