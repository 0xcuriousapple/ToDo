import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";
import LabelIcon from "@material-ui/icons/Label";
import IconButton from '@material-ui/core/IconButton';
import EventIcon from "@material-ui/icons/Event";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";




export default function iconselector(props) {

    function iconSelector(label) {
        switch (label) {
            case "Personal":
                return <FaceOutlinedIcon />
                break;
            case "personal":
                return <FaceOutlinedIcon />
                break;
            case "Work":
                return <WorkOutlineOutlinedIcon />
                break;
            case "work":
                return <WorkOutlineOutlinedIcon />;
                break;
            case "Shopping":
                return <ShoppingCartOutlinedIcon />;
                break;
            case "shopping":
                return <ShoppingCartOutlinedIcon />
                break;
            case "Set Date":
                return <EventIcon fontSize="small" />
            case "Date":
                return <Chip
                    label={props.date}
                    size="small" />
            default:
                return <div></div>
        }



    };
    return iconSelector(props.label);
}
