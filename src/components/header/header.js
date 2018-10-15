import React from 'react';
import { Layout, Menu, Icon, Row, Col, Dropdown, Button} from 'antd';
import './header.css';
const { Header } = Layout;

export default class HeaderCustom extends React.Component{
    state = {
        current: 'home',
        nav: '首页'
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const menu = (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <a href="http://www.madingzheng.cn/blog/#" rel="noopener noreferrer"><Icon type="home" theme="outlined" />首页</a>
                </Menu.Item>
                <Menu.Item key="edit">
                    <a href="http://www.madingzheng.cn/blog/#/archive" rel="noopener noreferrer"><Icon type="edit" theme="outlined" />归档</a>
                </Menu.Item>
                <Menu.Item key="star">
                    <a href="http://www.madingzheng.cn/blog/#/collect" rel="noopener noreferrer"><Icon type="star" theme="outlined" />收藏</a>
                </Menu.Item>
                <Menu.Item key="team">
                    <a href="http://www.madingzheng.cn/blog/#/about" rel="noopener noreferrer"><Icon type="team" theme="outlined" />关于</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header   style={{paddingTop:"15px"}}>
                <Row>
                    <Col
                        lg={{span: 4}}
                        md={{span: 4}}
                        xs={{span: 0}}
                    >
                        <div className="logo">

                        </div>
                    </Col>
                    <Col
                        lg={{span: 14}}
                        md={{span: 14}}
                        xs={{span: 0}}
                    >
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <a href="http://www.madingzheng.cn/blog/#" rel="noopener noreferrer"><Icon type="home" theme="outlined" />首页</a>
                            </Menu.Item>
                            <Menu.Item key="edit">
                                <a href="http://www.madingzheng.cn/blog/#/archive" rel="noopener noreferrer"><Icon type="edit" theme="outlined" />归档</a>
                            </Menu.Item>
                            <Menu.Item key="star">
                                <a href="http://www.madingzheng.cn/blog/#/collect" rel="noopener noreferrer"><Icon type="star" theme="outlined" />收藏</a>
                            </Menu.Item>
                            <Menu.Item key="team">
                                <a href="http://www.madingzheng.cn/blog/#/about" rel="noopener noreferrer"><Icon type="team" theme="outlined" />关于</a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col
                        lg={{span: 0}}
                        md={{span: 0}}
                        xs={{span: 10}}
                        className="drop-down"
                    >
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>首页</Button>
                        </Dropdown>
                    </Col>
                    <Col
                        lg={{span: 6}}
                        md={{span: 6}}
                        xs={{span: 14}}
                    >
                        <div
                            className="nav-auth"
                            style={{paddingTop:"-15px"}}
                        >
                            <Button
                                ghost
                                type="primary"
                                size="small"
                                style={{marginRight: 20}}
                            >
                                登录
                            </Button>
                            <Button
                                ghost
                                type="danger"
                                size="small"
                            >
                                注册
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Header>
        );
    }
}