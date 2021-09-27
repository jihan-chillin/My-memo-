import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link'; // next.js의 라우터

const Applayout = ({children}) =>{
    return(
        <div>
            <div>공통메뉴</div>
            <link href = "/"><a>노드버드</a></link>
            <link href = "/profile"><a>프로필</a></link>
            <link href = "/signup"><a>회원가입</a></link>
            {children}
        </div>
    )
};

Applayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default Applayout;
