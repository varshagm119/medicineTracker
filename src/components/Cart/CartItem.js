import React from "react";


const CartItem = props => {

    return(
        <li>
            <div>
                <span>{props.name}     --    amt-{props.amt}     --    qt - {props.enteredQt}</span>
            </div>
        </li>
    )
};

export default CartItem;