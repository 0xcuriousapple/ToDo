import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import EventIcon from "@material-ui/icons/Event";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import Fab from "@material-ui/core/Fab";
import pri from "./TaskPriorityIconFilter";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import CachedIcon from "@material-ui/icons/Cached";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LabelIcon from "@material-ui/icons/Label";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(11),
  },
  Button: {
    color: "white",
  },
  gif: {
    width: "100%",
    display: "block",
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = true;
  const screen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} className={classes.Button} size="small">
        Help
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"App Walkthrough : 8 Instructions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <List>
              <ListItem>
                <Typography variant="body1">1) Use &nbsp;&nbsp;</Typography>
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
                <Typography variant="body1">
                  &nbsp;&nbsp; to add tasks
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  2) Once task is added you can apply label, add due date, set
                  prority and update status of the task.
                </Typography>
              </ListItem>
              <ListItem className={classes.gif}>
                <Typography variant="body1">
                  3) Priority is represented by High &nbsp;&nbsp;
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="small"
                    style={{ color: "#FF9892" }}
                  />
                  &nbsp;&nbsp; , Medium &nbsp;&nbsp;
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="small"
                    style={{ color: "#FFE692" }}
                  />
                  &nbsp;&nbsp; and Low &nbsp;&nbsp;
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="small"
                    style={{ color: "#97FF92" }}
                  />
                  &nbsp;&nbsp; . By default its low, click to make it medium or
                  high.
                </Typography>
              </ListItem>
              <ListItem>
                {" "}
                <img
                  alt="Logo"
                  src="/images/gifs/priority.gif"
                  style={{ width: screen ? "100%" : "50%" }}
                />
              </ListItem>
              <ListItem className={classes.gif}>
                <Typography variant="body1">
                  4) Status is represented by New &nbsp;&nbsp;
                  <FiberNewOutlinedIcon />, In progress &nbsp;&nbsp;
                  <CachedIcon /> and Completed &nbsp;&nbsp;
                  <DoneOutlinedIcon />. By default its New, click to make it In
                  progress or completed.
                </Typography>
              </ListItem>
              <ListItem>
                <img
                  alt="Logo"
                  src="/images/gifs/status.gif"
                  style={{ width: screen ? "100%" : "50%" }}
                />
              </ListItem>
              <ListItem className={classes.gif}>
                <Typography variant="body1">
                  5) You can edit task by only clicking on it.
                </Typography>
              </ListItem>
              <ListItem>
                <img
                  alt="Logo"
                  src="/images/gifs/task.gif"
                  style={{ width: screen ? "100%" : "50%" }}
                />
              </ListItem>
              <ListItem className={classes.gif}>
                <Typography variant="body1">
                  6) Labels are represented by Personal &nbsp;&nbsp;
                  <FaceOutlinedIcon />, Work &nbsp;&nbsp;
                  <WorkOutlineOutlinedIcon />, Shopping &nbsp;&nbsp;
                  <ShoppingCartOutlinedIcon /> and others. Click on to set label{" "}
                  <LabelIcon />
                  intially, you can update label later too.
                </Typography>
              </ListItem>
              <ListItem>
                <img
                  alt="Logo"
                  src="/images/gifs/label.gif"
                  style={{ width: screen ? "100%" : "50%" }}
                />
              </ListItem>

              <ListItem className={classes.gif}>
                <Typography variant="body1">
                  7) You can select due date for task by clicking on{" "}
                  &nbsp;&nbsp;
                  <EventIcon />. you can update it any number of times.
                </Typography>
              </ListItem>
              <ListItem>
                <img
                  alt="Logo"
                  src="/images/gifs/date.gif"
                  style={{ width: screen ? "100%" : "50%" }}
                />
              </ListItem>
              <ListItem>
                <Typography variant="body1" className={classes.gif}>
                  8) You can set Filters by clicking on them. Tasklist will be
                  filtered on the basis of your selections. If Tasks are added
                  during selection, selected labels are applied as flags
                  automatically.
                </Typography>
              </ListItem>
              <ListItem>
                <img
                  alt="Logo"
                  src="/images/gifs/filter.gif"
                  style={{ width: screen ? "70%" : "30%" }}
                />
              </ListItem>
              <ListItem></ListItem>
              <ListItem>
                <Button
                  autoFocus
                  variant="contained"
                  onClick={handleClose}
                  color="primary"
                >
                  Done
                </Button>
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Skip
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
