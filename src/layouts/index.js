import React from 'react';
import { Layout } from 'antd';
import HeaderCustom from '../components/header/header';
import SiderCustom from '../components/sider/siderCustom';
import './index.css';
const { Footer } = Layout;
export default class Index extends React.Component{
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