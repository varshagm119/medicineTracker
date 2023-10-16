import React, { useRef, useState } from "react";
import Input from "./Input";

const MedItemForm = (props) => {
 
  const qtInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQt = qtInputRef.current.value;
    const enteredQtNumber = +enteredQt;
    props.onAddMed(enteredQtNumber);
  };
  
  if(props.qt<0){
    return;
  }

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={qtInputRef}
        label="Quantity"
        input={{
          id: props.id,
          type: "number",
        }}
      />
      { props.qt>0 && <button >+Add</button>}
    </form>
  );
};

export default MedItemForm;
