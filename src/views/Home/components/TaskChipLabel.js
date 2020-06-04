import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import LabelIcon from "@material-ui/icons/Label";
import IconButton from '@material-ui/core/IconButton';
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Labelpicker from "./Labelpicker";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));


export default function SmallChips(props) {
  const classes = useStyles();
  const [selectedlabel, setSelectedlabel] = React.useState(props.label);
  const handleLabelChange = (label) => {

    props.modify(props.index, 'label', label);
    setSelectedlabel(label);

    // props.Change(date);
    // setOpen(false);
  };

  const handleClick = () => {
    return <Labelpicker Change={this.handleLabelChange} />
  };

  const iconSelector = (selectedlabel) => {
    switch (selectedlabel) {
      case "Personal":
        return (<Labelpicker Change={handleLabelChange} icon={<FaceOutlinedIcon />} />)
        break;
      case "personal":
        return (<Labelpicker Change={handleLabelChange} icon={<FaceOutlinedIcon />} />)
        break;
      case "Work":
        return <Labelpicker Change={handleLabelChange} icon={<WorkOutlineOutlinedIcon />} />;
        break;
      case "work":
        return <Labelpicker Change={handleLabelChange} icon={<WorkOutlineOutlinedIcon />} />;
        break;
      case "Shopping":
        return <Labelpicker Change={handleLabelChange} icon={<ShoppingCartOutlinedIcon />} />;
        break;
      case "shopping":
        return <Labelpicker Change={handleLabelChange} icon={<ShoppingCartOutlinedIcon />} />;
        break;
      case "Others":
        return <Labelpicker Change={handleLabelChange} icon={<Chip
          label={selectedlabel}
          size="small"
        />} />;
        break;
      case "others":
        return <Labelpicker Change={handleLabelChange} icon={<Chip
          label={selectedlabel}
          size="small"

        />} />;
      case "Set Label":
        return <Labelpicker Change={handleLabelChange} icon={<LabelIcon />} />
        break;
      default:
        return <Labelpicker Change={handleLabelChange} icon={<Chip
          label={selectedlabel}
          size="small"
        />} />
        break;
    }
  };
  return <div className={classes.root}>{iconSelector(selectedlabel)}</div>;
}
