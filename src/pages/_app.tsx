import React from "react";
import Head from 'next/head';
import 'antd/dist/antd.css'

import wrapper from "../store/configureStore"
import PropTypes from "prop-types";
// next js  6버전 Provider 알아서 감싸줌



const Sweety = ({ Component }: any) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
            </Head>
            <Component />
        </>
    );
};

Sweety.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default wrapper.withRedux(Sweety);