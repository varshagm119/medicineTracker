import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import MedItemForm from "./MedItemForm";

const MedItem = props => {
    const cartCtx = useContext(CartContext);
    const [enteredQtNumber, setEnteredQtNumber] = useState(0)
    
    const addToCartHandler = enteredQt =>{
        if(enteredQt){
        setEnteredQtNumber(enteredQt);
        }
        cartCtx.onAddMedToCart({
            id: props.id,
            name:props.name,
            desc: props.desc,
            amt: props.amt,
            qt:props.qt-enteredQt,
            enteredQt:enteredQt
        })
       
    }
    
    
    return(
        <li>
            <div>
                <div> name  -  {props.name}   amount - {props.amt}     quantity - {props.qt-enteredQtNumber}
                <MedItemForm onAddMed={addToCartHandler} {...props} />
                </div>
            </div>
        </li>
    )
}
export default MedItem;