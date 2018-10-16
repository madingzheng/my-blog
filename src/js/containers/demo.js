import React from 'react';
import '../../css/demo/demo.css';
import {Card, Col, Row} from "antd";

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
          <Row gutter={16} className="home-card">
              <Col span={8}>
                  <Card title="小王子" bordered={false}>　　我们整天忙忙碌碌，像一群群没有灵魂的苍蝇，喧闹着，躁动着，听不到灵魂深处的声音。时光流逝，童年远去，我们渐渐长大，岁月带走了许许多多的回忆，也消蚀了心底曾今拥有的那份童稚的纯真，我们不顾心灵桎梏，沉溺于人世浮华，专注于利益法则，我们把自己弄丢了。</Card>
              </Col>
              <Col span={8}>
                  <Card title="百年孤独" bordered={false}>　　这个家庭的历史是一架周而复始无法停息的机器，是一个转动着的轮子，这只齿轮，要不是轴会逐渐不可避免地磨损的话，会永远旋转下去。   　　过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原，即使最狂热最坚贞的爱情，归根结底也不过是一种瞬息即逝的现实，唯有孤独永恒。</Card>
              </Col>
              <Col span={8}>
                  <Card title="日瓦戈医生" bordered={false}>　　现在我说的您要特别注意听：在别人心中存在的人，就是这个人的灵魂。这才是您本身，才是您的意识在一生当中赖以呼吸、营养以至陶醉的东西，这也就是您的灵魂、您的不朽和存在于别人身上的您的生命。</Card>
              </Col>
          </Row>
      </div>
    );
  }
}
