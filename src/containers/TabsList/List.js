import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    return (e) => {
      e.stopPropagation();
      this.props.handleRemoveTab(id);
    }
  }

  render() {
    const { tabs, activeTabId, handleChangeActiveTab } = this.props;
    return (
      <Menu
        onClick={handleChangeActiveTab}
        selectedKeys={[activeTabId]}
        mode="horizontal"
      >
        {
          tabs.map(tab => (
            <Menu.Item key={tab.id}>
              {tab.label} <Icon type="close" theme="outlined" onClick={this.handleRemove(tab.id)} />
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }
}