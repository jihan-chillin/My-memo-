import React from "react";
import PropTypes from 'prop-types';
import Link from "next/dist/client/link";
import { Menu } from "antd";
import 'antd/dist/antd.css'

const Applayout = ({children}) =>{
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
                    <Link href = "/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
                       
            {children}
        </div>
    )
};

Applayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default Applayout;
