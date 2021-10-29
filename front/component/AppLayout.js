import React, { useState } from 'react';
import PropTypes from 'prop-types';
// next.js의 자체적인 router
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';

import UserProfile from '../component/UserProfile';
import LoginForm from '../component/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`
const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState((false))

    return(
        <div>
           <Menu mode="horizontal">
                <Menu.Item key="/">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="/profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="/hashtag">
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item key="/signup">
                    <Link href="signup"><a>회원가입</a></Link>
                </Menu.Item>
           </Menu>

           <Row>
               <Col xs={24} md={6} />
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
               <Col xs={24} md={12} />
                    {children}
               <Col xs={24} md={6} />
                    <a href ="https://blog.naver.com/kimjihan77">Made by Jihan</a>
           </Row>
               
        </div>
    )
}

AppLayout.propTypes = {
    // React의 node 
    children: PropTypes.node.isRequired,
};

export default AppLayout;