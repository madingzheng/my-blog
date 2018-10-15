import React, { Component } from 'react'
import avatar from '../../assets/avatar.jpg'
import {
    Card, Layout, Row, Col, List
} from 'antd'
import './sider.css'
const { Content } = Layout;

const data = [
    {
        title: 'Vue父子组件之间的通信',
    },
    {
        title: 'git常用命令',
    },
    {
        title: 'ES6环境搭建',
    },
    {
        title: 'Vue轮播如何实现翻页功能',
    },
    {
        title: '开发去哪儿网',
    },
    {
        title: '开发去哪儿网',
    },
];

export default class SiderCustom extends Component {
    render() {
        return (
            <Content>
                <Row>
                    <Col  lg={{ span: 15, offset: 1 }}
                          md={{ span: 15, offset: 1 }}
                          xs={{ span: 24 }}
                          className="list-wrapper"
                    >
                        <List
                            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Card title={item.title}>Card content</Card>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col   lg={{ span: 6, offset: 1 }}
                           md={{ span: 6, offset: 1 }}
                           xs={{ span: 0 }}>
                        <div className="sider-container">
                            <div className="admin-info">
                                <header>
                                    <img src={avatar} alt="avatar"/>
                                </header>
                                <p className="admin-name">
                                    Oliver
                                </p>
                                <p className="admin-desc">
                                    前端打杂人员，略微代码洁癖
                                </p>
                            </div>
                            <div className="recent-article">
                                <Card title="最近文章" bordered={false}>
                                </Card>
                            </div>
                            <div className="tags-wrapper">
                                <Card title="标签" bordered={false}>
                                    <div className="tags-content">
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        )
    }
}