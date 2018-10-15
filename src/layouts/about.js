import React from 'react';
import HeaderCustom from "../components/header/header";
import SiderCustom from "../components/sider/siderCustomd";
import {Layout} from "antd";
const { Footer } = Layout;
export default class About extends React.Component{
    render() {
        return (
            <Layout>
                <HeaderCustom/>
                <SiderCustom/>
                <Footer>
                    Dingzheng Ma ©2018
                </Footer>
            </Layout>
        );
    }
}