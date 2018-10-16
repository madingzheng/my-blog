import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Dropdown, Button} from 'antd';
import '../../../css/home/homeheader.css';

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/demo">demo</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/about">About Me</Link>
        </Menu.Item>
    </Menu>
);
export default class HomeHeader extends React.Component {
  render() {
    return (
        <Row className="home-header">
            <Col
                lg={{span: 5}}
                md={{span: 5}}
                xs={{span: 14}}
            >
                <div className="home-header-title"><Link to="/">马定争的个人主页</Link></div>
            </Col>
            <Col
                lg={{span:10}}
                md={{span:10}}
                sx={{span:0}}
            />
            <Col
                lg={{span:9}}
                md={{span:9}}
                xs={{span:0}}
            >
                <div className="home-header-nav">
                    <div className="home-header-nav-item"><Link to="/">Home</Link></div>
                    <div className="home-header-nav-item"><Link to="/blog">Blog</Link></div>
                    <div className="home-header-nav-item"><Link to="/demo">Demo</Link></div>
                    <div className="home-header-nav-item"><Link to="/about">About Me</Link></div>
                </div>
            </Col>
            <Col
                lg={{span:0}}
                md={{span:0}}
                xs={{span:10}}
            >
                <Dropdown overlay={menu} placement="bottomCenter">
                    <Button type="primary" style={{marginLeft:"50%"}}><Link to="/">Home</Link></Button>
                </Dropdown>
            </Col>
        </Row>
    );
  }
}
