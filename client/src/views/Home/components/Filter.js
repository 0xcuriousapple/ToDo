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
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(11),
  },
  filterclass: {
    margin: theme.spacing(0.5),
  },
  chips: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
  },
  chipHigh: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
    background: "#FF9892",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    color: "black",
  },
  chipMedium: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
    background: "#FFE692",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    color: "black",
  },
  chipLow: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
    background: "#97FF92",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    color: "black",
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
  const [filters, setFilter] = React.useState({
    Personal: 0,
    Work: 0,
    Shopping: 0,
    Others: 0,
    high: 0,
    low: 0,
    medium: 0,
    new: 0,
    inprogress: 0,
    completed: 0,
    today: 0,
    tom: 0,
    seldate: 0,
  });

  const handledatepick = (value) => {
    setselecteddatefilter(value);
  };
  //   const handleModify = (index, id, value) => {
  //     console.log(value);
  //     props.add({ date: value });
  //     const temp = filters;
  //     temp["date"] = value;
  //     setFilter(temp);
  //   };

  const handleClick = (sel) => {
    if (filters[sel[Object.keys(sel)]] == 0) {
      console.log(sel);
      props.add(sel);
      const temp = filters;
      temp[sel[Object.keys(sel)]] = 1;
      setFilter(temp);
    } else if (filters[sel[Object.keys(sel)]] == 1) {
      props.del(sel);
      const temp = filters;
      temp[sel[Object.keys(sel)]] = 0;
      setFilter(temp);
    }
  };

  const handleClickToday = (sel) => {
    if (filters["today"] == 0) {
      props.add(sel);
      const temp = filters;
      temp["today"] = 1;
      setFilter(temp);
    } else {
      props.del(sel);
      const temp = filters;
      temp["today"] = 0;
      setFilter(temp);
    }
  };

  const handleClickTom = (sel) => {
    if (filters["tom"] == 0) {
      props.add(sel);
      const temp = filters;
      temp["tom"] = 1;
      setFilter(temp);
    } else {
      props.del(sel);
      const temp = filters;
      temp["tom"] = 0;
      setFilter(temp);
    }
  };
  const handleClickSelectedDate = (sel) => {
    if (filters["seldate"] == 0) {
      props.add(sel);
      const temp = filters;
      temp["seldate"] = 1;
      setFilter(temp);
    } else {
      props.del(sel);
      const temp = filters;
      temp["seldate"] = 0;
      setFilter(temp);
    }
  };
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getToday = () => {
    var today = new Date();
    return `${today.getDate()}, ${months[today.getMonth()]}`;
  };

  const getTomorrow = () => {
    var tom = new Date();
    tom.setDate(tom.getDate() + 1);
    console.log(`${tom.getDate()}, ${months[tom.getMonth()]}`);
    return `${tom.getDate()}, ${months[tom.getMonth()]}`;
  };
  // {{ status: "new" }}
  const [selecteddatefilter, setselecteddatefilter] = React.useState(
    getToday()
  );
  return (
    <div className={classes.root}>
      <Grid item md={12} className={classes.filterclass}>
        <Typography variant="h6">Labels :</Typography>
        {filters.Personal ? (
          <Chip
            icon={<FaceOutlinedIcon />}
            size="small"
            label="Personal"
            color="primary"
            onClick={() => handleClick({ label: "Personal" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<FaceOutlinedIcon />}
            variant="outlined"
            size="small"
            label="Personal"
            color="primary"
            onClick={() => handleClick({ label: "Personal" })}
            className={classes.chips}
          />
        )}
        {filters.Work ? (
          <Chip
            icon={<WorkOutlineOutlinedIcon />}
            size="small"
            label="Work"
            color="primary"
            onClick={() => handleClick({ label: "Work" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<WorkOutlineOutlinedIcon />}
            variant="outlined"
            size="small"
            label="Work"
            color="primary"
            onClick={() => handleClick({ label: "Work" })}
            className={classes.chips}
          />
        )}
        {filters.Shopping ? (
          <Chip
            icon={<ShoppingCartOutlinedIcon />}
            size="small"
            label="Shopping"
            color="primary"
            onClick={() => handleClick({ label: "Shopping" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<ShoppingCartOutlinedIcon />}
            size="small"
            variant="outlined"
            label="Shopping"
            color="primary"
            onClick={() => handleClick({ label: "Shopping" })}
            className={classes.chips}
          />
        )}
        {filters.Others ? (
          <Chip
            size="small"
            label="Others"
            color="primary"
            onClick={() => handleClick({ label: "Others" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            variant="outlined"
            size="small"
            label="Others"
            color="primary"
            onClick={() => handleClick({ label: "Others" })}
            className={classes.chips}
          />
        )}
        {/* <Chip icon={<AddIcon />} variant="outlined" size="small" label="Add label" color="secondary" onClick={() => handleClick({ label: 'Personal' })} className={classes.chips} /> */}
      </Grid>
      <Grid item md={12} className={classes.filterclass}>
        <Typography variant="h6">Priority :</Typography>
        {filters.high ? (
          <Chip
            icon={<PriorityIcon color="high" />}
            size="small"
            label="High"
            color="primary"
            onClick={() => handleClick({ priority: "high" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<PriorityIcon color="high" />}
            variant="outlined"
            size="small"
            label="High"
            color="primary"
            onClick={() => handleClick({ priority: "high" })}
            className={classes.chips}
          />
        )}
        {filters.medium ? (
          <Chip
            icon={<PriorityIcon color="medium" />}
            size="small"
            label="Medium"
            color="primary"
            onClick={() => handleClick({ priority: "medium" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<PriorityIcon color="medium" />}
            variant="outlined"
            size="small"
            label="Medium"
            color="primary"
            onClick={() => handleClick({ priority: "medium" })}
            className={classes.chips}
          />
        )}
        {filters.low ? (
          <Chip
            icon={<PriorityIcon color="low" />}
            size="small"
            label="Low"
            color="primary"
            onClick={() => handleClick({ priority: "low" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<PriorityIcon color="low" />}
            variant="outlined"
            size="small"
            label="Low"
            color="primary"
            onClick={() => handleClick({ priority: "low" })}
            className={classes.chips}
          />
        )}
      </Grid>
      <Grid item md={12} className={classes.filterclass}>
        <Typography variant="h6">Status :</Typography>

        {filters.new ? (
          <Chip
            icon={<FiberNewOutlinedIcon />}
            size="small"
            label="New"
            color="primary"
            onClick={() => handleClick({ status: "new" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<FiberNewOutlinedIcon />}
            size="small"
            variant="outlined"
            label="New"
            color="primary"
            onClick={() => handleClick({ status: "new" })}
            className={classes.chips}
          />
        )}
        {filters.inprogress ? (
          <Chip
            icon={<CachedIcon />}
            size="small"
            label="In progress"
            color="primary"
            onClick={() => handleClick({ status: "inprogress" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<CachedIcon />}
            variant="outlined"
            size="small"
            label="In progress"
            color="primary"
            onClick={() => handleClick({ status: "inprogress" })}
            className={classes.chips}
          />
        )}
        {filters.completed ? (
          <Chip
            icon={<DoneIcon />}
            size="small"
            label="Completed"
            color="primary"
            onClick={() => handleClick({ status: "completed" })}
            className={classes.chips}
          />
        ) : (
          <Chip
            icon={<DoneIcon />}
            variant="outlined"
            size="small"
            label="Completed"
            color="primary"
            onClick={() => handleClick({ status: "completed" })}
            className={classes.chips}
          />
        )}
      </Grid>
      <Grid item md={12} className={classes.filterclass}>
        <Typography variant="h6">Date :</Typography>

        {filters.today ? (
          <Chip
            size="small"
            label="Today"
            color="primary"
            onClick={() => handleClickToday({ date: getToday() })}
            className={classes.chips}
          />
        ) : (
          <Chip
            variant="outlined"
            size="small"
            label="Today"
            color="primary"
            onClick={() => handleClickToday({ date: getToday() })}
            className={classes.chips}
          />
        )}
        {filters.tom ? (
          <Chip
            size="small"
            label="Tomorrow"
            color="primary"
            onClick={() => handleClickTom({ date: getTomorrow() })}
            className={classes.chips}
          />
        ) : (
          <Chip
            variant="outlined"
            size="small"
            label="Tomorrow"
            color="primary"
            onClick={() => handleClickTom({ date: getTomorrow() })}
            className={classes.chips}
          />
        )}
        {filters.seldate ? (
          <Chip
            size="small"
            label="Selected date"
            color="primary"
            onClick={() =>
              handleClickSelectedDate({ date: selecteddatefilter })
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
              handleClickSelectedDate({ date: selecteddatefilter })
            }
            className={classes.chips}
          />
        )}
      </Grid>
      <Grid item md={12} className={classes.filterclass}>
        <DatePickFilter handledatepick={handledatepick} />
      </Grid>

      {/* <TaskChipDate
          date="Set Date"
          modify={handleModify}
          index="0"
          style={{ margin: "1.5ch" }}
        /> */}
    </div>
  );
}
