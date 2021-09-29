import React, { useCallback } from 'react'
import {Avatar, Card, Button} from 'antd'

const UserProfile = ({SetIsLoggedIn}) =>{
    // 로그아웃
    const onLogOut = useCallback(()=>{
        SetIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                // 리액트에서 배열([])로 정렬시 key값을 써줘야 함!
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>
            ]}
        >
            <Card.Meta
                title = "jihan"
                avatar = {<Avatar>JH</Avatar>}
            />
            <button onClick={onLogOut}>로그아웃</button>
        </Card>
    )
}

export default UserProfile;