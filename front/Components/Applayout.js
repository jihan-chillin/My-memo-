import React from "react";
import PropTypes from 'prop-types';

const Applayout = ({children}) =>{
    return(
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    )
};

Applayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default Applayout;
