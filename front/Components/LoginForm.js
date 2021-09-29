import React, { useCallback, useState, useMemo } from 'react'
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';


//
const ButtonWrapper = styled.div`
    marginTop : 10px;
`
const FormWrapper = styled(Form)`
    padding : 10px
`;

const LoginForm = ({SetIsLoggedIn}) =>{
    const [id, setId] = useState('');
    const [password, setPassword ] = useState('');

    // Component의 props로 넘겨주는 메소드는 usecallback을 쓸 것!
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    }, [])

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    }, [])

    const style = useMemo(()=> ({ marginTop : 10 }), [] )

    const onSubmitForm = useCallback(()=>{
        console.log(id, password);
        // Applayout에서 dummy 불러옴
        SetIsLoggedIn(true);
    }, [id, password]);

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

            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;