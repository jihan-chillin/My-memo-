import React from 'react';
import AppLayout from '../component/AppLayout';
import NicknameEditForm from '../component/NicknameEditForm';
import FollowerList from '../component/FollowerList';
import FollowingList from '../component/FollowingList';

const Profile = () =>{
    const followerList = [{nickname : '지한'}, {nickname : '코줍'}, { nickname : '곧출근러'}];
    const follwingList = [{nickname : '지한'}, {nickname : '코줍'}, { nickname : '곧출근러'}]
    
    return (
        <AppLayout>
            <NicknameEditForm/>
            <FollowingList header="팔로잉 목록" data={follwingList}/>
            <FollowerList header="팔로워 목록" data={followerList}/>
        </AppLayout>
    )
};

export default Profile;