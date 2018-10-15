import React, { Component } from 'react'
import HeaderCustom from "../components/header/header";
import {Layout} from "antd";
import SiderCustom from "../components/sider/siderCustomc";
const { Footer } = Layout;
export default class Collect extends Component {
    componentDidMount() {
        document.title = 'Water Blog'
    }
    render() {
        return (
            <Layout>
                <HeaderCustom/>
                <SiderCustom/>
                <Footer>
                    Dingzheng Ma ©2018
                </Footer>
            </Layout>
        )
    }
}