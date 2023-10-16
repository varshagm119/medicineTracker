// import CartContext from "../../store/cart-context";
// import { useContext } from "react";

const HeaderCartButton = (props) => {
   // const cartCtx = useContext(CartContext);
  
    // const numberOfCartItems = cartCtx.items.reduce((curNumber, item )=> {
    //   return curNumber + item.amt;
    // }, 0)
  
    return (
      <button  onClick={props.onClick}>
        
        <span>Your Cart</span>
      </button>
    );
  };
  
  export default HeaderCartButton;