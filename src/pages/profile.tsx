import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";



export interface Follow {
    name: string
}
const followData: Follow[]  = [
    { name: "hi" },
    { name: "q" },
    { name: "aa" }
];

const Profile = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title> 내 프로필 | Tweety</title>
            </Head>
            <AppLayout>
                <FollowList header={"목록"} data={followData}/>
            </AppLayout>
        </>
    )
}
export default Profile;
