import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    let updatedItems;
    if(action.type === 'ADD'){
         updatedItems = state.items.concat(action.item);
    }
    if(action.type === 'REMOVE'){
        console.log('in Prooovvv')
   }
  return {
    items: updatedItems,
    totalAmount: 0
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item:item})
  }

  const removeItemFromCartHandler = item => {
    dispatchCartAction({type: 'REMOVE', item:item})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addMedicine: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
