import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import "antd/dist/antd.css"
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import {useSelector} from "react-redux"
import styled from "styled-components"
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;



const AppLayout = ({children}: any) => {

    // react - redux 연결
const isLoggedIn = useSelector((state) => state );
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>트위티</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton  />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
                { children }
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile/>: <LoginForm setIsLoggedIn={isLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    { children }
                 </Col>
                <Col xs={24} md={6}>
                   오른쪽메뉴
                </Col>
            </Row>
        </>
    )

}

AppLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default AppLayout;
