import React from 'react';
import Applayout from '../Components/Applayout';
import Head from 'next/head';

const Profile = () => {
    return (
        // children : Applayout 아래에 있는 요소
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <Applayout>내 프로필</Applayout>
        </>

    )
};

export default Profile;