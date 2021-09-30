import React from 'react';
import Applayout from '../Components/Applayout';
import NicknameEditForm from '../Components/NicknameEditform';
import FollowList from '../Components/FollowList';
import Head from 'next/head';

const Profile = () => {

    // dummy data
    const follwingList = [{nickname : '코줍'}, {nickname : '즤하늬'}, {nickname : '프로독학러'}];
    const followerList = [{nickname : '코줍'}, {nickname : '즤하늬'}, {nickname : '프로독학러'}];

    return (
        // children : Applayout 아래에 있는 요소
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <Applayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={follwingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </Applayout>
        </>

    )
};

export default Profile;