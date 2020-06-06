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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import validate from "validate.js";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton, Link, Typography } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
    },
  },
});

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
  paddingbutton: {
    display: "inline-block",
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    color: "white",
  },
}));

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(props.modalopen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { history } = props;

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
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const handleSignup = () => {};
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  //if (props.modalopen) handleClickOpen();
  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        variant="text"
        size="small"
        className={classes.paddingbutton}
        disableRipple={true}
        disableFocusRipple={true}
      >
        Sign in
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xs"
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
              <form onSubmit={handleSignIn} className={classes.form}>
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
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSignup} color="primary">
            <Signup />
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue as Guest
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
