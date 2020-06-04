import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function auto(props) {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={commonlabels.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="label"
            margin="normal"
            variant="standard"
          />
        )}
        onInputChange={(event, value) => {
          console.log(value);
          props.change(value);
        }}
      />
    </div>
  );
}

const commonlabels = [
  { title: "Personal" },
  { title: "Work" },
  { title: "Shopping" },
  { title: "Others" },
];
