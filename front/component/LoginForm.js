import React, { useCallback} from 'react'
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
    marginTop : 10px;
`
const FormWrapper = styled(Form)`
    padding : 10px
`;

const LoginForm = ({SetIsLoggedIn}) =>{
    const [id, onChangeId] =useInput('');
    const [password, onChangePassword] =useInput('');

    const onSubmitForm = useCallback(()=>{
        console.log(id, password);
        SetIsLoggedIn(true);
    }, [id,password]);

    // return 부분 : virtual Dom 부분
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>

            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input type="password" value={password} onChange={onChangePassword} required/>
            </div>

            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes ={
    SetIsLoggedIn : PropTypes.func.isRequired,
};

export default LoginForm;