import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

// _app.js
// 여러 가지 component 안에서 중복되는 코드들 한 번에 처리 
// ex) import 'antd/dist/antd.css'

// _app.js : index.js의 부모컴퍼넌트임 
const NodeBird = ({Component}) =>{
    return (
        <>
        <Head>
            <meta charSet = "utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    )
};

NodeBird.prototype =  {
    Component : PropTypes.elementType.isRequired,
}

export default NodeBird;