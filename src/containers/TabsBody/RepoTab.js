import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Pagination } from 'antd';
import { isEmpty } from 'lodash'
import RepoFilterForm from '../../components/RepoTab/RepoFilterForm';
import Item from '../../components/Results/Item';

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
          <RepoFilterForm values={filters} onChange={this.handleChangeFilter} />
        </Col>
        <Col span={18}>
          <Input.Search name="query" placeholder="Поиск репозиторий" value={filters.query} onChange={this.handleChangeFilter} onSearch={handleSearch} />
          {
            items && items.map(item => (
              <Item name={item.full_name}
                    url={item.url}
                    description={item.description}
                    language={item.language}
                    stars={item.stargazers_count}
                    topics={item.topics}
                    license={item.license && item.license.name}
                    updated={item.pushed_at}
                    issues={item.open_issues_count}
              />
            ))
          }
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