import React from 'react';
import '../../../css/home/homebanner.css';

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src="http://p5.qhimg.com/t014fbcfb34fb481bf2.jpg" alt="头像" />
        </div>
          <div className="home-banner-desc">
            <h1>马定争</h1>
            <p>一个正在努力的程序猿</p>
            <p>分享编码</p>
            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/madingzheng">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="http://www.madingzheng.cn/">个人博客</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
