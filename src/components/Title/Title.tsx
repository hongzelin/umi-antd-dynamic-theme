import React from 'react';
import classnames from 'classnames';
import classPrefix from 'prefix-classnames';
import './Title.less';

const PREFIX = 'c-title';
const px = classPrefix(PREFIX);

interface ListProps {
  title: string;
  targetUrl?: string;
  badge?: number;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Title: React.FC<ListProps> = (props) => {
  const { title, badge, style, icon, targetUrl, onClick } = props;

  const titleClass = classnames('title', {"active": targetUrl});

  return (
    <h3 className={px('titleWrap')} style={style}>
      {icon}
      <span className={titleClass}>{title}</span>
      {badge ? <span className={px('badge')}>{badge}</span> : ''}
    </h3>
  );
};

export default Title;
