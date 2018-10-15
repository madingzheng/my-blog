import React, { Component } from 'react'
import avatar from '../../assets/avatar.jpg'
import {
    Card, Layout, Row, Col
} from 'antd'
import './sider.css'
const { Content } = Layout;


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
                        <Card
                            title="关于我"
                        >
                            <p>目前就读于温州大学，还有一年就毕业了，希望自己在前端的路上越走越偏</p>
                        </Card>
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