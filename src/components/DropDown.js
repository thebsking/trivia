import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";

const DropDown = (props) => {

  const [value ,setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const menuItemList=(array)=> {
    return array.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>);
  }

  

  return (
    <Select id={props.id} value={value} onChange={handleChange} defaultValue={props.label}>
      {menuItemList(props.options)}
    </Select>
  )
};

export default DropDown;