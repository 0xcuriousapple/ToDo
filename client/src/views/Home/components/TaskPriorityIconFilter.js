import React from "react";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import { IconButton } from "@material-ui/core";

export default function FilterPriorityIcon(props) {
  const colorSelector = (id) => {
    switch (id) {
      case "high":
        return "#FF9892";
      case "medium":
        return "#FFE692";
      case "low":
        return "#97FF92";
    }
  };
  return (
    <span>
      <RadioButtonCheckedOutlinedIcon
        fontSize="small"
        style={{ color: colorSelector(props.color) }}
      />
    </span>
  );
}
