import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Typography as MuiTypography, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  task: {
    fontWeight: "bold",
  },
  label: {
    textAlign: "left",
  },
}));

export default function PriorityIcon(props) {
  const classes = useStyles();
  const [Pri, setPri] = React.useState(props.priority);
  useEffect(() => {
    setPri(props.priority);
  }, [props.priority]);
  const handleClick = () => {
    let temp;
    switch (Pri) {
      case "high":
        temp = "low";
        break;
      case "medium":
        temp = "high";
        break;
      case "low":
        temp = "medium";
        break;
    }
    props.modify(props.index, "priority", temp);
    setPri(temp);
  };
  const colorSelector = (id) => {
    switch (id) {
      case "high":
        return "#FF9892";
      case "medium":
        return "#FFE692";
      case "low":
        return "#97FF92";
    }
  };
  return (
    <span>
      <IconButton
        style={{ color: colorSelector(Pri) }}
        aria-label="date"
        size="small"
        onClick={handleClick}
      >
        <RadioButtonCheckedOutlinedIcon fontSize="small" />
      </IconButton>
    </span>
  );
}
