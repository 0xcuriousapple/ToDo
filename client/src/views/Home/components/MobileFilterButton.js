import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MobileFilterDialog from "./MobileFilterDialog";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },

    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
  const handleClickOpenD = () => {
    setOpen(true);
  };

  const handleCloseD = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="delete" size="small" onClick={handleClickOpenD}>
        <Fab variant="extended">Filter</Fab>
      </IconButton>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseD}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Select your choices"}
        </DialogTitle>
        <DialogContent>
          <MobileFilterDialog
            selecteddatefilter={setselecteddatefilter}
            filters={filters}
            handledatepick={handledatepick}
            handleClick={handleClick}
            handleClickToday={handleClickToday}
            handleClickTom={handleClickTom}
            handleClickSelectedDate={handleClickSelectedDate}
            getToday={getToday}
            getTomorrow={getTomorrow}
          ></MobileFilterDialog>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseD} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
