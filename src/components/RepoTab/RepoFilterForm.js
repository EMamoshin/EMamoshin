import React from 'react';
import { Form, Input, Radio } from 'antd';

export default function RepoFilterForm({ values, onChange }) {
  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <Form layout="horizontal">
        <Form.Item
          label="Мин. звезд"
          {...formItemLayout}
        >
          <Input name="minStars" value={values.minStars} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Мин. форков"
          {...formItemLayout}
        >
          <Input name="minForks" value={values.minForks} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Форки"
          {...formItemLayout}
        >
          <Radio.Group name="fork" value={values.fork} onChange={onChange}>
            <Radio value="true">Да</Radio>
            <Radio value="false">Нет</Radio>
            <Radio value="only">Все</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}