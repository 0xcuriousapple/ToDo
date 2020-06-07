import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "./Datepicker";

import { setDate } from "date-fns";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1ch",
    justifyContent: "center",
  },
}));

export default function SmallChips(props) {
  const classes = useStyles();
  const [date, setDate] = React.useState(props.date);
  const handleChange = (date) => {
    props.modify(
      props.index,
      "date",
      `${date.getDate()}, ${months[date.getMonth()]}`
    );
    setDate(date);
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

  var M_to_n = {
    Jan: "0",
    Feb: "1",
    Mar: "2",
    Apr: "3",
    May: "4",
    Jun: "5",
    Jul: "6",
    Aug: "7",
    Sep: "8",
    Oct: "9",
    Nov: "10",
    Dec: "11",
  };
  const iconSelector = () => {
    if (date instanceof Date) {
      return (
        <DatePicker
          Change={handleChange}
          icon="Date"
          date={`${date.getDate()}, ${months[date.getMonth()]}`}
        />
      );
    } else if (date == "Set Date") {
      return <DatePicker Change={handleChange} icon="Set Date" date="null" />;
    } else {
      let day, month;
      if ((date.charAt[1] = ",")) {
        day = date.substr(0, 1);
        month = date.substr(2, 5);
      } else {
        day = date.substr(0, 2);
        month = date.substr(4, 7);
      }
      // var d = new Date();
      return <DatePicker Change={handleChange} icon="Date" date={date} />;
    }
  };
  return <span className={classes.root}>{iconSelector(date)}</span>;
}
