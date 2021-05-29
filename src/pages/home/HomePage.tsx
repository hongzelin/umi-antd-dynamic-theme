import React from 'react';
import { Radio } from 'antd';
import { onChangeTheme } from '@/utils';
import './HomePage.less';

class HomePage extends React.Component {
  state = {
    size: 'large',
    color: '#ff3a00',
  };

  handleSizeChange = (e) => {
    this.setState({ color: e.target.value });
    onChangeTheme(e.target.value);
  };

  render() {
    const { color } = this.state;
    return (
      <>
        <Radio.Group value={color} onChange={this.handleSizeChange}>
          <Radio.Button value="#345495">Pink</Radio.Button>
          <Radio.Button value="gray">gray</Radio.Button>
          <Radio.Button value="#0fb748">green</Radio.Button>
          <Radio.Button value="#0081ff">blue</Radio.Button>
        </Radio.Group>
      </>
    );
  }
}

export default HomePage;
