import React from 'react';
import { List, Avatar, Icon, Row, Col } from 'antd';
import '../../css/blog/blog.css'

const listData = [];
for (let i = 0; i < 5; i++) {
    listData.push({
        href: 'http://www.madingzheng.cn/',
        title: `Martin article  ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Blog Article',
        content: 'Hello World',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

export default class Blog extends React.Component {

  render() {
    return (
      <div>
          <Row>
              <Col
                  lg={{span: 2}}
                  md={{span: 2}}
                  xs={{span: 0}}
              />
              <Col
                  lg={{span: 20}}
                  md={{span: 20}}
                  xs={{span: 24}}
                  className="List"
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
                              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
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
              <Col
                  lg={{span: 2}}
                  md={{span: 2}}
                  xs={{span: 0}}
              />
          </Row>
      </div>
    );
  }
}
