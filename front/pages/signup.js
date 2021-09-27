import React from 'react';
import Applayout from '../Components/Applayout';
import Head from 'next/head';


const Signup = () =>{
    return (
        // children : Applayout 아래에 있는 요소
        <>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <Applayout>회원가입</Applayout>
        </>
    )
};

export default Signup;