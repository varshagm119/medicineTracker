import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    onAddMedToCart: (item) => {},
    qqt:0
});

export default CartContext;