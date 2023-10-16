import React from "react";

const Input = React.forwardRef((props, ref) => {
    return(
        <div>
            <label htmlFor={props.id}> Quantity</label>
            <input ref={ref} {...props.input} /> 
        </div>
    )
});

export default Input;