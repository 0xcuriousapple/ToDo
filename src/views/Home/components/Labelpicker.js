import React from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconSelector from './IconSelector'
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  listitem: {
    minWidth: "30px",
    marginRight: "8px"
  },
}));
const options = [
  'Set Label',
  'Personal',
  'Work',
  'Shopping',
  'Others',
];
export default function Labelpicker(props) {
  const classes = useStyles();
  const [selectedL, setSelectedL] = React.useState("none");
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleChange = (value) => {
    setSelectedL(value);
    props.Change(value);
    // console.log(value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, option) => {
    setSelectedL(option);
    props.Change(option);
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="primary" aria-label="date" size="small" onClick={handleClickListItem}>
        {props.icon}
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option)}
          >
            <ListItemIcon className={classes.listitem}>
              <IconSelector label={option} />
            </ListItemIcon>
            <ListItemText primary={option} />

          </MenuItem>

        ))}

      </Menu>

      {/* <div>Set label</div> */}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Set Label</DialogTitle>
        <DialogContent>
          <LabelAutocomplete change={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Set
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
