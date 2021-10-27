import React from 'react';
import AppLayout from '../component/AppLayout';
import Head from 'next/head';

const Profile = () =>{
    return (
        <>
        <Head>
            <title>내 프로필 | Nodebird</title>
        </Head>
        <AppLayout>내 프로필</AppLayout>
        </>
    )
};

export default Profile;