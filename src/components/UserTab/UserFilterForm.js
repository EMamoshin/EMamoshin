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
          label="Мин. фолловеров"
          {...formItemLayout}
        >
          <Input name="followers" value={values.followers} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Мин. репозиторий"
          {...formItemLayout}
        >
          <Input name="repos" value={values.repos} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Тип"
          {...formItemLayout}
        >
          <Radio.Group name="type" value={values.type} onChange={onChange}>
            <Radio value="user">Пользователи</Radio>
            <Radio value="org">Организации</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}