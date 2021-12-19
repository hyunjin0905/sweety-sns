import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import {useDispatch} from "react-redux";




const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
    },[]);
    return(
        <Card actions={[
            <div key="twit">짹짹</div>,
            <div key="following">팔로윙</div>,
            <div key="follower">팔로워</div>
        ]}
        >
        <Card.Meta
            avatar={<Avatar></Avatar>}
            title="hyunjin"
        />
        <Button onClick={onLogOut}>로그아웃</Button>
    </Card>)
}
export default UserProfile;