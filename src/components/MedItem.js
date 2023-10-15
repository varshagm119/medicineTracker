import React, { useContext } from "react";
import CartContext from "../store/cart-context";
const MedItem = props => {
    
    return(
        <li>
            <div>
                <div> name  -  {props.name}   amount - {props.amt}     quantity - {props.qt}
                <button onClick={props.onRemove}>add</button>
                </div>
            </div>
        </li>
    )
}
export default MedItem;