import { Button, InputLabel } from "@mui/material";
import React from "react";
import BasicInput from "../components/BasicInput";
import DropDown from "../components/DropDown";

function AddQuestion() {

  const handleSubmit = () => {
    //write some code here
  };

  const optionsArr = ['Cat 1', 'Cat 2', 'Cat 3']

  return (
    <div id='new-q-div' onSubmit={handleSubmit}>
      <form id='new-q-form'>
        <BasicInput id='category-box' label='Category' size={1} />
        <InputLabel id="type-drop-down">Type</InputLabel>
        <DropDown labelId='type-drop-down' id='type-box' options={optionsArr} />
        <BasicInput id='question-box' label='Question' size={3} />
        <BasicInput id='answer-box' label='Answer' size={1} />
        <Button type="submit" variant="contained">Save Question</Button>
      </form>
    </div>
  )
}

export default AddQuestion;