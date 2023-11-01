import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import axios from "axios";

const AddMedicines = (props) => {
    const cartCtx = useContext(CartContext);
    const [medId,setMedId] = useState("");
    const [medName,setMedName] = useState("");
    const [medDesc,setMedDesc] = useState("");
    const [medAmt,setMedAmt] = useState("");
    const [medQt,setMedQt] = useState("");

    const idChangeHandler = event =>{
        setMedId(event.target.value);
    }
    const nameChangeHandler = event =>{
        setMedName(event.target.value);
    }
    const descChangeHandler = event =>{
        setMedDesc(event.target.value);
    }
    const amtChangeHandler = event =>{
        setMedAmt(event.target.value);
    }

    const qtChangeHandler = event =>{
        setMedQt(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const prod = {
          medId: medId,
          medName: medName,
          medDesc: medDesc,
          medAmt: medAmt,
          medQt: medQt
        }
        axios.post('https://crudcrud.com/api/Dashboard/523a2acc7d8947278dfc87d342cc518a/Products',prod)
        .then((res)=>
        console.log(res))
        .catch(err => console.error(err.message))
        props.onAddMed(medId,medName,medDesc,medAmt,medQt);
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="id">Medicine id </label>
        <input id="id" type="number" onChange={idChangeHandler} value={medId} />
        <label htmlFor="name">Medicine name </label>
        <input id="name" type="text" onChange={nameChangeHandler} value={medName}/>
        <label htmlFor="description"> description </label>
        <input id="description" type="text" onChange={descChangeHandler} value={medDesc} />
        <label htmlFor="amount"> amount </label>
        <input id="amount" type="number" onChange={amtChangeHandler} value={medAmt}/>
        <label htmlFor="quantity"> quantity </label>
        <input id="quantity" type="number"  onChange={qtChangeHandler} value={medQt}/>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicines;
