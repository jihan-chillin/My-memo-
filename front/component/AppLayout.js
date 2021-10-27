import React from 'react';
import PropTypes from 'prop-types';
// next.js의 자체적인 router
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return(
        <div>
            <Link href="/"><a>노드버드</a></Link>
            <Link href="/profile"><a>프로필</a></Link>
            <Link href="signup"><a>회원가입</a></Link>
        </div>
    )
}

AppLayout.propTypes = {
    // React의 node 
    children: PropTypes.node.isRequired,
};

export default AppLayout;