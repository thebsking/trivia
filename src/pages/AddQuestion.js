import { Button, InputLabel } from "@mui/material";
import React from "react";
import { useForm } from 'react-hook-form'
import BasicInput from "../components/BasicInput";
import DropDown from "../components/DropDown";

function AddQuestion() {

  const {register, handleSubmit} = useForm();
  const onSubmit = data => {console.log(data)};
  const optionsArr = ['Regular', 'Range', 'Anagram', 'Halftime', 'Final']

  return (
    <div id='new-q-div' onSubmit={handleSubmit(onSubmit)}>
      <form id='new-q-form'>
        <BasicInput {...register('category')} id='category-box' label='Category' size={1} />
        <InputLabel id="type-drop-down">Type</InputLabel>
        <DropDown {...register('type')} labelId='type-drop-down' id='type-box' options={optionsArr} />
        <BasicInput {...register('question')} id='question-box' label='Question' size={3} />
        <BasicInput {...register('answer')} id='answer-box' label='Answer' size={1} />
        <Button type="submit" variant="contained">Save Question</Button>
      </form>
    </div>
  )
}

export default AddQuestion;