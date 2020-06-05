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
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import DoneIcon from '@material-ui/icons/Done';
import CachedIcon from '@material-ui/icons/Cached';
import TaskChipDate from "./TaskChipDate";
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

export default function Filter(props) {
    const classes = useStyles();
    const [filters, setFilter] = React.useState(
        {
            Personal: 0,
            Work: 0,
            Shopping: 0,
            Others: 0,
            high: 0,
            low: 0,
            medium: 0,
            new: 0,
            inprogress: 0,
            completed: 0,
            date: 0
        }
    );

    const handleModify = (index, id, value) => {
        props.add({ 'date': value })
        const temp = filters
        temp['date'] = value;
        setFilter(temp);
    };

    const handleClick = (sel) => {

        if (filters[sel[Object.keys(sel)]] == 0) {
            props.add(sel)
            const temp = filters
            temp[sel[Object.keys(sel)]] = 1;
            setFilter(temp);
        }
        else if (filters[sel[Object.keys(sel)]] == 1) {
            props.del(sel)
            const temp = filters
            temp[sel[Object.keys(sel)]] = 0;
            setFilter(temp);
        }

    };
    // {{ status: "new" }}
    return (
        <div className={classes.root}>


            <Grid item md={12} className={classes.filterclass}>
                Labels :
                <Chip icon={<FaceOutlinedIcon />} variant="outlined" size="small" label="Personal" color="primary" onClick={() => handleClick({ label: 'Personal' })} className={classes.chips} />
                <Chip icon={<WorkOutlineOutlinedIcon />} variant="outlined" size="small" label="Work" color="primary" onClick={() => handleClick({ label: 'Work' })} className={classes.chips} />
                <Chip icon={<ShoppingCartOutlinedIcon />} variant="outlined" size="small" label="Shopping" color="primary" onClick={() => handleClick({ label: 'Shopping' })} className={classes.chips} />
                <Chip variant="outlined" size="small" label="Others" color="primary" onClick={() => handleClick({ label: 'Others' })} className={classes.chips} />
                {/* <Chip icon={<AddIcon />} variant="outlined" size="small" label="Add label" color="secondary" onClick={() => handleClick({ label: 'Personal' })} className={classes.chips} /> */}

            </Grid>
            <Grid item md={12} className={classes.filterclass}>
                Priority :
                <Chip variant="outlined" size="small" label="High" color="primary" onClick={() => handleClick({ priority: 'high' })} className={classes.chipHigh} />
                <Chip variant="outlined" size="small" label="Medium" color="primary" onClick={() => handleClick({ priority: 'medium' })} className={classes.chipMedium} />
                <Chip variant="outlined" size="small" label="Low" color="primary" onClick={() => handleClick({ priority: 'low' })} className={classes.chipLow} />
            </Grid>
            <Grid item md={12} className={classes.filterclass}>
                Status :
                <Chip icon={<FiberNewOutlinedIcon />} variant="outlined" size="small" label="New" color="primary" onClick={() => handleClick({ status: 'new' })} className={classes.chips} />
                <Chip icon={<CachedIcon />} variant="outlined" size="small" label="In progress" color="primary" onClick={() => handleClick({ status: 'inprogress' })} className={classes.chips} />
                <Chip icon={<DoneIcon />} variant="outlined" size="small" label="Completed" color="primary" onClick={() => handleClick({ status: 'completed' })} className={classes.chips} />

            </Grid>
            <Grid item md={12} className={classes.filterclass}>
                Date:
                <Chip variant="outlined" size="small" label="Today" color="primary" onClick={() => handleClick({ label: 'Others' })} className={classes.chips} />
                <Chip variant="outlined" size="small" label="Tommorow" color="primary" onClick={() => handleClick({ label: 'Others' })} className={classes.chips} />

                <TaskChipDate date='Set Date' modify={handleModify} index='0' style={({ margin: "1.5ch" })} />

            </Grid>

        </div>
    );
}
