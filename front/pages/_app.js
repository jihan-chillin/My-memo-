import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import wrapper from '../store/configureStore';


const NodeBird = ({Component}) => {
    return(
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Nodebird</title>
        </Head>
        <Component/>
        </>
    )
};
 NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);