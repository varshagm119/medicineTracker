import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import MedItem from "./MedItem";
const MedicineMenu = (props) => {
  const cartCtx = useContext(CartContext);
  //console.log(cartCtx)
  const addHandler = (item) => {
    cartCtx.addItem({ ...item });
  };
  const removeHandler = (item) => {
    cartCtx.removeItem({ ...item });
  };

  return (
    <ul>
      {cartCtx.items.map((item) => (
        <MedItem
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          amt={item.amt}
          qt={item.qt}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
};

export default MedicineMenu;
