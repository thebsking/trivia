import React from "react";
import BasicInput from "../components/BasicInput";

function AddQuestion() {
  
  const handleSubmit = () => {
    //write some code here
  };
  
  return (
    <div id='new-q-div' onSubmit={handleSubmit}>
      <form id='new-q-form'>
        <BasicInput id='category-box' label='Category' size={1} />
        <BasicInput id='type-box' label='Type' size={1} />
        <BasicInput id='question-box' label='Question' size={3} />
        <BasicInput id='answer-box' label='Answer' size={1} />
      </form>
    </div>
  )
}

export default AddQuestion;