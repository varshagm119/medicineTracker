import React, {Fragment} from "react";
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return (
        <Fragment>
            <header >
                <h1> React Medicine</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
        </Fragment>
    )
};

export default Header;