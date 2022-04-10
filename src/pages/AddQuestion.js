import React from "react";
import { Input } from '@mui/material'

function AddQuestion() {
  
  const handleSubmit = () => {
    //write some code here
  };
  
  return (
    <div id='new-q-div' onSubmit={handleSubmit}>
      <form id='new-q-form'>
        <Input id='category-box' placeholder='Category' variant="standard" />
        <Input id='question-box' placeholder='Question' multiline minRows={2} />
      </form>
    </div>
  )
}

export default AddQuestion;