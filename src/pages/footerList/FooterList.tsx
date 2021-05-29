import React from 'react';
import classPrefix from 'prefix-classnames';
import List from '@/components/List';
import './FooterList.less';

const PREFIX = 'p-home-footerlist';
const px = classPrefix(PREFIX);

const data = {
  id: '1',
  title: '标题标题标题标题标题标题标题标题',
  desc: '关于xxx描述描述描述',
  date: '2021-09-23',
};

const FooterList: React.FC = (props) => {
  return (
    <div className={px('root')}>
      <List
        title="自定义列表组件"
        more
        badge={12}
        data={[1, 2, 3, 4].map((item) => data)}
      />
    </div>
  );
};

export default FooterList;
