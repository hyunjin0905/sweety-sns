import React, { useState, useCallback } from 'react';
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import useInput from "../Hooks/useInput";






const ErrorMessage = styled.div`
    color: red;
`

const Signup = () => {

    const [ id, onChangeId ] = useInput('');
    const [ password, onChangePassword ] = useInput('');
    const [ nickname, onChangeName ] = useInput('');

    const [ passwordCheck, setPasswordCheck ] = useState<string>('');
    const [ passwordError, setPasswordError ] = useState<boolean>(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[])

    const [ term, setTerm ] = useState<string>('');
    const [ termError, setTermError ] = useState<boolean>(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[])

    const onSubmit = useCallback(()=>{
        // e.preventDefault() 해줌
    },[]);


    return (
        <AppLayout>
            <Head>
                <title> 회원가입</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label>닉네임</label>
                    <Input required name="nickname" type="text" value={nickname} onChange={onChangeName} />
                </div>
                <div>
                    <label>아이디</label>
                    <Input required name="id" type="text" value={id} onChange={onChangeId}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <Input required name="password" type="password" value={password} onChange={onChangePassword}/>
                    <Input required name="password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck}/>
                    { passwordError && <ErrorMessage>비밀번호 일치 하지 않습니다</ErrorMessage> }
                </div>
            </Form>
            <div>
                <Checkbox name="term" checked={!!term} onChange={onChangeTerm}>
                    회원가입을 동의합니다.
                </Checkbox>
                {termError && <ErrorMessage>약관동의 부탁드립니다.</ErrorMessage>}
            </div>
            <div>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </AppLayout>

    )
}
export default Signup;