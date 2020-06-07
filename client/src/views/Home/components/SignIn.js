import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import validate from "validate.js";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton, Link, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "7px",
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  sugestion: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [baropen, setbarOpen] = React.useState(false);
  const [credentials, setCred] = React.useState({
    email: "",
    password: "",
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(props.loginflag);
  }, [props.loginflag]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseGuest = () => {
    setOpen(false);
    setbarOpen(true);
  };
  const handleSnackbarClose = () => {
    setbarOpen(false);
  };
  const handleSignIn = (event) => {
    console.log(credentials);
    props.signIN(credentials);
  };

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
    if (event.target.name != "policy") {
      let id = event.target.name;
      let val = event.target.value;
      let newCredentials = credentials;
      newCredentials[id] = val;
      setCred(newCredentials);
    }
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  //if (props.modalopen) handleClickOpen();
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}

      <Snackbar
        open={baropen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="warning">
          Please note that as a Guest user, your tasks are not synced with the
          database.
        </Alert>
      </Snackbar>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xs"
        disableBackdropClick={true}
      >
        <DialogTitle id="responsive-dialog-title">
          {
            <Typography className={classes.title} variant="h3">
              Sign in
            </Typography>
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign in to sync your todos on multiple devices,If you continue as
            guest, todos will not be synced.
          </DialogContentText>

          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form}>
                <TextField
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  label="Email address"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("password")}
                  fullWidth
                  helperText={
                    hasError("password") ? formState.errors.password[0] : null
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ""}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Sign in now
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary">
            <Signup signUP={props.signUP} closePrevdig={handleClose} />
          </Button>
          <Button onClick={handleCloseGuest} color="primary" autoFocus>
            Continue as Guest
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
