import React from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Popover from '@material-ui/core/Popover';
import IconSelector from './IconSelector'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      position: "relative",
    },
    dropdown: {
      position: "absolute",
      top: 1000,
      right: 0,
      left: 0,
      zIndex: 1,
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export default function Datepicker(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(props.date);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.Change(date);
    handleClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    // <ClickAwayListener onClickAway={handleClickAway}>
    <span>
      <IconButton
        color="primary"
        aria-label="date"
        onClick={handleClick}
        size="small"

      >
        <IconSelector label={props.icon} date={props.date} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.dropdown}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="static"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              disabled={true}
              onChange={handleDateChange}
              autoOk={true}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>

      </Popover>

    </span>
  );
}
