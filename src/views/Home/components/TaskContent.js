import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TaskChipLabel from "./TaskChipLabel";
import TaskChipDate from "./TaskChipDate";
import TaskChipStatus from "./TaskChipStatus";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Typography as MuiTypography } from '@material-ui/core';
import ContentEditable from 'react-contenteditable'
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentEditable: {
        '&:hover': {
            background: "#f7f7f7"
        },
        '&:focus': {
            background: "#fcf8e1",
            outline: 0
        }
    },


}));
// .content - editable {
//     padding: 1rem;
// }

//   .content - editable: hover {
//     background: #f7f7f7;
// }

//   .content - editable: focus {
//     background: #fcf8e1;
//     outline: 0;
// }
export default function TaskContent(props) {
    const classes = useStyles();
    const text = useRef('');
    const handleChange = evt => {
        text.current = evt.target.value;
        console.log(text.current);
        props.modify(props.index, 'task', text.current);
    };


    return (

        <ContentEditable html={props.task} onChange={handleChange} className={classes.contentEditable} />

    );
}
