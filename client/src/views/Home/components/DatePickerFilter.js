import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersStaticWrapper: {
      staticWrapperRoot: {
        backgroundColor: "transparent",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  picker: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
    display: "inline-block",
  },
}));
export default function Datepick(props) {
  // The first commit of Material-UI
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
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.handledatepick(`${date.getDate()}, ${months[date.getMonth()]}`);
  };

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.picker}>
        <KeyboardDatePicker
          disableToolbar
          variant="static"
          format="dd/mm/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Select Date"
          autoOk={true}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.picker}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
