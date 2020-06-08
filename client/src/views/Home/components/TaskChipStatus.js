import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CachedIcon from "@material-ui/icons/Cached";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import { IconButton } from "@material-ui/core";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function TaskStatus(props) {
  const classes = useStyles();
  const [status, setStatus] = React.useState(props.status);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const handleClick = () => {
    let temp;
    switch (status) {
      case "new":
        temp = "inprogress";
        break;
      case "inprogress":
        temp = "completed";
        break;
      case "completed":
        temp = "inprogress";
        break;
    }
    props.modify(props.index, "status", temp);
    setStatus(temp);
  };

  const iconSelector = (label) => {
    switch (label) {
      case "new":
        return (
          <IconButton
            color="primary"
            aria-label="date"
            size="small"
            onClick={handleClick}
          >
            <FiberNewOutlinedIcon />
          </IconButton>
        );

        break;
      case "inprogress":
        return (
          <IconButton
            color="primary"
            aria-label="date"
            size="small"
            onClick={handleClick}
          >
            <CachedIcon />
          </IconButton>
        );
        break;
      case "completed":
        return (
          <IconButton
            color="primary"
            aria-label="date"
            size="small"
            onClick={handleClick}
          >
            <DoneOutlinedIcon />
          </IconButton>
        );
        break;
    }
  };
  return <div>{iconSelector(status)}</div>;
}
