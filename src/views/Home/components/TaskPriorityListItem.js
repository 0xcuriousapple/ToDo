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
import { Grid, Typography as MuiTypography, Hidden } from '@material-ui/core';
import TaskContent from './TaskContent';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    task: {
        fontWeight: "bold"
    },
    label: {
        textAlign: "left"
    }
}));

export default function TaskList(props) {

    const { characterData: characters } = props;
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);
    const [list, setList] = React.useState(props.characterData);

    const handleToggle = (value, index) => () => {
        const currentIndex = list.indexOf(value);
        const newChecked = [...list];

        if (currentIndex === -1) {
            newChecked.push(value);
            props.removeCharacter(index);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setList(newChecked);
    };

    const handleModify = (index, id, value) => {
        console.log(id);
        props.modify(index, id, value);
        const newlist = [...list];
        newlist[index][id] = value;
        setList(newlist)
    };


    useEffect(() => {
        setList(props.characterData);
    }, [props.characterData]);


    return (
        <ListItem key={props.index} button>
            <TaskChipStatus status={props.status} modify={handleModify} index={props.index} />
            <Grid item xs={10}>
                <MuiTypography variant="h5" >
                    <ListItemText
                        style={{ marginLeft: "2ch" }}
                        disableTypography="true"
                    >
                        <TaskContent task={props.task} index={props.index} modify={handleModify} />
                    </ListItemText>
                </MuiTypography>
            </Grid>


            <TaskChipLabel label={props.label} modify={handleModify} index={props.index} />


            <TaskChipDate date={props.date} modify={handleModify} index={props.index} />


            <IconButton aria-label="delete" size="small" onClick={handleToggle(props.task, props.index)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>

    )
}


