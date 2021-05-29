import React from 'react';
import classPrefix from 'prefix-classnames';
import { Pagination, Tooltip } from 'antd';
import Title from '@/components/Title';
import { CaretRightOutlined } from '@ant-design/icons';
import './List.less';

// 代表 components/List 组件
const PREFIX = 'c-list';
const px = classPrefix(PREFIX);

export interface Data {
  id: string;
  title: string;
  desc?: string;
  status?: string;
  date?: string;
}

interface ListProps {
  title: string;
  badge?: number;
  more?: boolean;
  data?: Data[];
  isPage?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * 列表
 */
const List: React.FC<ListProps> = (props) => {
  const { title, badge, more, data, style, icon, isPage } = props;

  function onDetail(id: string) {}

  function renderList() {
    return data?.map((item, index) => {
      return (
        <div className={px('item')} key={index}>
          <div className="titleTop">
            <Tooltip placement="top" title={item.title} key={index}>
              <h3 className="title" data-status={item.status} onClick={() => onDetail(item.id)}>
                {item.title}
              </h3>
            </Tooltip>
            <span className="date">{item.date}</span>
          </div>
          {item.desc && <p className="desc">{item.desc}</p>}
        </div>
      );
    });
  }

  return (
    <div className={px('root')} style={style}>
      <div className={px('content')}>
        <div className={px('headerWrap')}>
          <Title title={title} badge={badge} icon={icon} />
          {more && (
            <span className={px('more')}>
              查看更多
              <CaretRightOutlined />
            </span>
          )}
        </div>
        {renderList()}
      </div>
      <div className={px('page')}>
        <Pagination simple defaultCurrent={1} defaultPageSize={5} total={10} />
      </div>
    </div>
  );
};

export default List;
