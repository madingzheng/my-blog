import React from 'react';
import { Card,Row,Col} from 'antd'
import '../../../css/home/homecard.css';


export default class HomeCardArea extends React.Component {
    render() {
        return (
            <div className="home-card-area">
                <Row gutter={16} className="home-card">
                    <Col span={8}>
                        <Card title="文章列表" bordered={false}>Martin article</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="美文摘抄" bordered={false}>
                            <p>小王子</p>
                            <p>百年孤独</p>
                            <p>日瓦戈医生</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="关于我" bordered={false}>
                            <p>关于我</p>
                            <p>联系方式</p>
                            <p>应聘</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
