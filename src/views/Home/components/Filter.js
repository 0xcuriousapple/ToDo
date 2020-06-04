import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AddIcon from '@material-ui/icons/Add';

import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneIcon from '@material-ui/icons/Done';
import CachedIcon from '@material-ui/icons/Cached';

import { Grid, Hidden } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(4),

    },
    filterclass: {
        margin: theme.spacing(0.5),
    },
    chips: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.7)
    },
    chipHigh: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.7),
        background: '#FF9892',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderColor: 'white',
        color: 'black',
    },
    chipMedium: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.7),
        background: '#FFE692',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderColor: 'white',
        color: 'black',
    },
    chipLow: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.7),
        background: '#97FF92',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderColor: 'white',
        color: 'black',
    },


}));

export default function Filter() {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>


            <Grid item md={12} className={classes.filterclass}>
                Labels :
                <Chip icon={<FaceOutlinedIcon />} variant="outlined" size="small" label="Personal" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip icon={<WorkOutlineOutlinedIcon />} variant="outlined" size="small" label="Work" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip icon={<ShoppingCartOutlinedIcon />} variant="outlined" size="small" label="Shopping" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip variant="outlined" size="small" label="others" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip icon={<AddIcon />} variant="outlined" size="small" label="Add label" color="secondary" onClick={handleClick} className={classes.chips} />

            </Grid>
            <Grid item md={12} className={classes.filterclass}>
                Priority :
                <Chip variant="outlined" size="small" label="High" color="primary" onClick={handleClick} className={classes.chipHigh} />
                <Chip variant="outlined" size="small" label="Medium" color="primary" onClick={handleClick} className={classes.chipMedium} />
                <Chip variant="outlined" size="small" label="Low" color="primary" onClick={handleClick} className={classes.chipLow} />
            </Grid>
            <Grid item md={12} className={classes.filterclass}>
                Status :
                <Chip icon={<CachedIcon />} variant="outlined" size="small" label="New" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip icon={<DoneIcon />} variant="outlined" size="small" label="In progress" color="primary" onClick={handleClick} className={classes.chips} />
                <Chip icon={<DoneIcon />} variant="outlined" size="small" label="Completed" color="primary" onClick={handleClick} className={classes.chips} />

            </Grid>


        </div>
    );
}
