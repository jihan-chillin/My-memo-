import React, { useCallback, useState } from 'react';
import Applayout from '../Components/Applayout';
import Head from 'next/head';
import {Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import useinput from '../hooks/useinput';

const ErrorMessage = styled.div`
    color : red;
`

const Signup = () =>{
    const [id, onChangeId] = useinput('');
    const [pw, onChangePw] = useinput('');
    const [nick, onChangeNick] = useinput('');

    // 비밀번호 체크
    const [pwCheck, setPwCheck] = useState('');
    const [pwError, setPwError] = useState(false);
    const onChangePwCheck = useCallback((e)=>{
        setPwCheck(e.target.value);
        setPwError(e.target.value !== pw);
    }, [pw]);

    // 약관동의
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
      }, []);
    

    // onSubmit : e.preventDefault가 기본적으로 되어 있음.
    const onSubmit = useCallback(()=>{
        if(pw !== pwCheck){
            return setPwError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nick, pw);
        }, [pw, pwCheck])

    return (
        // children : Applayout 아래에 있는 요소
        <Applayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>

        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} required onChange={onChangeId}/>
            </div>

            <div>
                <label htmlFor="user-nick">닉네임</label>
                <br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
            </div>

            <div>
                <label htmlFor="user-pw">비밀번호</label>
                <br/>
                <Input name="user-pw" type="password" value={pw} required onChange={onChangePw}/>
            </div>

            <div>
                <label htmlFor="user-pw-check">비밀번호 체크</label>
                <br/>
                <Input name="user-pw-check" type="password" value={pwCheck} required onChange={onChangePwCheck}/>
                {pwError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>

            <div>
                <Checkbox name="user-term" checked={term} onChangeTerm={onChangeTerm}>약관에 동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>

            <div style={{marginTop : 10}}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
        
        </Applayout>
    )
};

export default Signup;