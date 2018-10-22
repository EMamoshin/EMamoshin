import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, List, Skeleton, Avatar, Pagination } from 'antd';
import { isEmpty } from 'lodash'
import UserFilterForm from '../../components/UserTab/UserFilterForm';

class RepoTab extends Component {
  constructor(props) {
    super(props);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangeFilter(e) {
    this.props.handleChangeFilter(e.target.name, e.target.value);
  }

  handleChangePage(value) {
    this.props.handleChangeFilter('page', value);
    this.props.handleSearch({
      page: value
    });
  }

  render() {
    const {
      results: { total_count, items },
      filters,
      handleSearch
    } = this.props;
    return (
      <Row gutter={32}>
        <Col span={6}>
          <UserFilterForm values={filters} onChange={this.handleChangeFilter} />
        </Col>
        <Col span={18}>
          <Input.Search name="query" placeholder="Поиск репозиторий" value={filters.query} onChange={this.handleChangeFilter} onSearch={handleSearch} />
          <List
            className="demo-loadmore-list"
            loading={false}
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar_url} />}
                    title={<a href={item.html_url}>{item.login}</a>}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
          { !isEmpty(items) && <Pagination current={filters.page || 1} onChange={this.handleChangePage} total={total_count} /> }
        </Col>
      </Row>
    );
  }
}

RepoTab.propTypes = {
  filters: PropTypes.object,
  results: PropTypes.object
};

RepoTab.defaultProps = {
  filters: {},
  results: {},
};

export default RepoTab;