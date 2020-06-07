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

import { useState, useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import validate from "validate.js";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Link,
  FormHelperText,
  Checkbox,
  Typography,
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
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
  policy: {
    presence: { allowEmpty: false, message: "is required" },
    checked: true,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "7px",
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
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
  policy: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  havean: {
    paddingTop: 8,
  },
  paddingbutton: {
    display: "inline-block",
    padding: 0,
    minHeight: 0,
    minWidth: 0,
  },
}));

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);

  const [credentials, setCred] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
    if (event.target.name != "policy") {
      let id = event.target.name;
      let val = event.target.value;
      let newCredentials = credentials;
      newCredentials[id] = val;
      setCred(newCredentials);
    }
    // if (id == "firstName") setCred(()=>{newCredentials[]});
    // else if (id == "lastName") setCred(...credentials, { lastName: val });
    // else if (id == "email") setCred(...credentials, { email: val });
    // else if ((id = "password")) setCred(...credentials, { password: val });
  };

  const handleSignUp = (event) => {
    console.log(credentials);
    props.signUP(credentials);
    handleClose();
    props.closePrevdig();
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  //if (props.modalopen) handleClickOpen();
  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        variant="text"
        className={classes.paddingbutton}
        disableRipple={true}
        disableFocusRipple={true}
        color="primary"
      >
        Sign up
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xs"
      >
        <DialogContent>
          {/* <DialogContentText>
            Sign in to sync your todos on multiple devices,If you continue as
            guest, todos will not be synced.
          </DialogContentText> */}
          <Typography className={classes.title} variant="h2">
            Create new account
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Use your email to create new account
          </Typography>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              error={hasError("firstName")}
              fullWidth
              helperText={
                hasError("firstName") ? formState.errors.firstName[0] : null
              }
              label="First name"
              name="firstName"
              onChange={handleChange}
              type="text"
              value={formState.values.firstName || ""}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              error={hasError("lastName")}
              fullWidth
              helperText={
                hasError("lastName") ? formState.errors.lastName[0] : null
              }
              label="Last name"
              name="lastName"
              onChange={handleChange}
              type="text"
              value={formState.values.lastName || ""}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              error={hasError("email")}
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
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
            <div className={classes.policy}>
              <Checkbox
                checked={formState.values.policy || false}
                className={classes.policyCheckbox}
                color="primary"
                name="policy"
                onChange={handleChange}
              />
              <Typography
                className={classes.policyText}
                color="textSecondary"
                variant="body1"
              >
                I have read the{" "}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                  underline="always"
                  variant="h6"
                >
                  Terms and Conditions
                </Link>
              </Typography>
            </div>
            {hasError("policy") && (
              <FormHelperText error>
                {formState.errors.policy[0]}
              </FormHelperText>
            )}
            <Button
              className={classes.signUpButton}
              color="primary"
              disabled={!formState.isValid}
              fullWidth
              size="large"
              //type="submit"
              variant="contained"
              onClick={handleSignUp}
            >
              Sign up now
            </Button>
            <Typography
              color="textSecondary"
              variant="body1"
              className={classes.havean}
            >
              Have an account? <Link onClick={handleClose}>Sign in</Link>
            </Typography>
          </form>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Sign up
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue as Guest
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
