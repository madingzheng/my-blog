import React from 'react';
import '../../css/about/about.css';

export default class About extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container about-container">
          <div className="about-detial about-desc">
            <h1>关于我</h1>
            <ul>
              <li>一个正在学习的程序猿, 有着强烈的学习欲望</li>
              <li>2019年毕业</li>
              <li>本科学的是计算机与科学</li>
              <li>喜欢看书和实践，喜欢旅游和运动</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-contact">
            <h1>联系我</h1>
            <ul>
              <li>个人主页：<a target="_blank" rel="noopener noreferrer" href="http://www.madingzheng.cn/">http://www.madingzheng.cn/</a></li>
              <li>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/madingzheng">https://github.com/madingzheng</a></li>
              <li>Email： 747016839@qq.com</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-friend">
            <h1>友情链接</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://juejin.im/">掘金</a></li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-简历">
            <h1>我的应聘</h1>
            <ul>
              <li>前端开发工程师</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
