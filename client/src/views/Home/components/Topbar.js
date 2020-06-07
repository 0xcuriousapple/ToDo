import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import SigninButton from "./SignInButton";
import { Link as RouterLink } from "react-router-dom";
import SignupButton from "./SignupButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { Hidden } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (props.userData.lastname == "guest") {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [props.userData]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignout = () => {
    props.signOUT();
  };

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          {/* <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logos/finallogo.png"
              width="100"
              height="35"
            />
          </RouterLink>
          <Typography variant="h" className={classes.title}>
            ToDo
          </Typography> */}

          <RouterLink to="/" className={classes.title}>
            <img
              alt="Logo"
              src="/images/logos/finallogo.png"
              width="100"
              height="35"
            />
          </RouterLink>
          {/* <Hidden mdDown>
            <Typography variant="caption" className={classes.title}>
              developed by @thehead
            </Typography>
          </Hidden> */}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar className={classes.orange}>
                  {props.userData.firstname.charAt(0)}
                  {props.userData.lastname.charAt(0)}
                </Avatar>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleSignout}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
          )}
          {!auth && (
            <div>
              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Avatar className={classes.orange}>
                  {props.userData.firstname.charAt(0)}
                  {props.userData.lastname.charAt(0)}
                </Avatar>
              </IconButton>  */}
              <SigninButton
                signUP={props.signUP}
                signIN={props.signIN}
              ></SigninButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
