import React, { useState, useCallback, FC } from "react";
import { Button, Form } from "antd";
import Link from 'next/link';
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers";




const ButtonWrapper = styled.div`
    margin-top: 10px
`
const FormWrapper = styled(Form)`
    padding: 10px
`

interface LoginFormProps {
    setIsLoggedIn: boolean
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { setIsLoggedIn } = props;
    // store.dispatch 랑 같음
    const dispatch = useDispatch()
    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[])
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[])
    const onSubmitForm = useCallback(() => {
        // e.defaultTarget x
        dispatch(loginAction())
    },[ id, password ]);

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor = "user-id">아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor = "user-password">비밀번호</label>
                <br />
                <input name="user-password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired as any
}

export default LoginForm;