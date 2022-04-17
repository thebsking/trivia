import React from "react";
import { TextField } from "@mui/material";

function BasicInput(props) {

  return (
   <TextField label={props.label} id={props.id} multiline minRows={props.size} />
  )
};

export default BasicInput;