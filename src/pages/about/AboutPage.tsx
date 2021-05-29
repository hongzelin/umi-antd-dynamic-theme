import React from 'react';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Table,
} from 'antd';
import { onChangeTheme } from '@/utils';
import './AboutPage.less';

const { Option } = Select;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AboutPage = () => {
  const rowSelection = {
    onChange: () => {},
  };

  return (
    <div>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label="改变主题色">
          <Select
            defaultValue="#ff3a00"
            style={{ width: 192 }}
            onChange={onChangeTheme}
          >
            <Option value="#ff3a00">red</Option>
            <Option value="#0fb748">green</Option>
            <Option value="#0081ff">blue</Option>
          </Select>
        </Form.Item>

        <Form.Item label="数字输入框">
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className="ant-form-text"> 台机器</span>
          <a href="https://ant.design">链接文字</a>
        </Form.Item>
        <Form.Item label="开关">
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="滑动输入条">
          <Slider defaultValue={70} />
        </Form.Item>

        <Form.Item label="日期选择框">
          <DatePicker />
        </Form.Item>
        <Form.Item label="日期范围选择框">
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label="评分">
          <Rate defaultValue={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>

      <Divider style={{ marginBottom: 60 }}>Table</Divider>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default AboutPage;
