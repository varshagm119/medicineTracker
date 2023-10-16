import React, { useContext } from "react";
import MedItem from "./MedItem";
const MedicineMenu = (props) => {
 
//   const DUMMY= [
//     {
//         id:1,name:'abc',desc:'ssdc',amt:12, qt:'2'
//     },
//     {
//         id:2,name:'dolo',desc:'fever',amt:2, qt:'4'
//     },
//   ]

// const updateQt = (id, enteredQt) => {
//     // Find the medicine item with the specified ID and update the qt attribute
//     const updatedMedicines = props.medicines.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           qt: item.qt - enteredQt,
//         };
//       }
//       return item;
//     });

  const medList = props.medicines.map((item) => (
    <MedItem
      key={item.id}
      id={item.id}
      name={item.name}
      desc={item.desc}
      amt={item.amt}
      qt={item.qt}
      
    />
  ))
  return (
    <ul>
      {medList}
    </ul>
  );
};


export default MedicineMenu;
