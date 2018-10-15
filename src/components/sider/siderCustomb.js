import React, { Component } from 'react'
import avatar from '../../assets/avatar.jpg'
import {
    Card, Layout, Row, Col, List, Avatar, Icon
} from 'antd';
import './sider.css';
const { Content } = Layout;
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);


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
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={listData}
                            footer={<div><b>ant design</b> footer part</div>}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
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