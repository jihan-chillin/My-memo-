import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from "next/dist/client/link";
import { Menu, Input, Row, Col } from "antd"; // Row, Col : 반응형 그리드

import UserProfile from '../Components/UserProfile';
import LoginForm from '../Components/LoginForm';

import 'antd/dist/antd.css'

const Applayout = ({children}) =>{

    // 서버 연결 전 로그인 dummy data
    const [isLoggedin, setisLoggedin] = useState(false);

    return(
        <div>
            {/* antd로부터 menu템플릿 이용 */}
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href = "/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                     <Link href = "/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                     <Input.Search style={{ verticalAlign : 'middle'}} enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            
            {/* 반응형 디자인은 모바일 기준을 먼저 해야함(xs, ) => 효율성을 위해 */}
            {/* 브레이크 포인트 설정에서 문제가 생김  */}
            {/* 가로 먼저  */}

            {/* gutter : 간격 */}
            <Row gutter={8}>

                <Col xs={24} md={6}>
                    {isLoggedin ? <UserProfile/> : <LoginForm/>}  
                </Col>

                <Col xs={24} md={12}>
                    {children}
                </Col>

                <Col xs={24} md={6}>
                    {/* target="_blank" : 새 페이지를 여는데, 보안문제가 있기 때문에 항상 rel noreferrer noopener를 작성 */}
                    <a href="https://github.com/jihan-chillin/React-SNS" target="_blank" rel="noreferrer noopener">Made by jihan</a>
                </Col>
                
            </Row>
           
        </div>
    )
};

Applayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default Applayout;
