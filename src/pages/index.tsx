import React from 'react';
import classPrefix from 'prefix-classnames';
import { Typography, Space } from 'antd';
import Home from './home';
import About from './about';
import FooterList from './footerList';
import './index.less';

const PREFIX = 'p-index';
const px = classPrefix(PREFIX);

const { Title } = Typography;

export default function IndexPage() {
  return (
    <div className={px('wrap')}>
      <h1 className={px('title')}>动态主题</h1>
      <Home />

      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
        <Space align="start">
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design
          </Title>
        </Space>
      </section>
      <About />

      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
        <Space align="start">
          <Title level={2} style={{ marginBottom: 0 }}>
            自定义组件
          </Title>
        </Space>
      </section>
      <FooterList />
    </div>
  );
}
