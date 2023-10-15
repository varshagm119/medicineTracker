import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addMedicine: (item) => {},
    removeItem: (item) => {} 
});

export default CartContext;