import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';
import { changeFilter, fetchRepo, fetchUser } from '../../actions'
import { selectActiveTab } from '../../selectors'
import RepoTab from './RepoTab';
import UserTab from './UserTab';

class TabsBody extends Component {
  render() {
    const {
      activeTab,
      handleChangeFilter,
      handleSearch
    } = this.props;
    if (isEmpty(activeTab)) return null;
    return (
      <Spin spinning={activeTab.loading}>
        {
          (activeTab.mode === 'repo') ?
            <RepoTab {...activeTab} handleChangeFilter={handleChangeFilter} handleSearch={handleSearch} /> :
            (activeTab.mode === 'user') ? <UserTab {...activeTab} handleChangeFilter={handleChangeFilter} handleSearch={handleSearch} /> : null
        }
      </Spin>
    )
  }
}

TabsBody.propTypes = {
  activeTab: PropTypes.object
};

TabsBody.defaultProps = {
  activeTab: {}
};

const mapStateToProps = createStructuredSelector({
  activeTab: selectActiveTab
});

const mapDispatchToProps = dispatch => ({
  changeFilter: bindActionCreators(changeFilter, dispatch),
  fetchRepo: bindActionCreators(fetchRepo, dispatch),
  fetchUser: bindActionCreators(fetchUser, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChangeFilter: props => (field, value) => {
      props.changeFilter(props.activeTab.id, field, value);
    },
    handleSearch: props => (options) => {
      if (props.activeTab.mode === 'repo') {
        props.fetchRepo(props.activeTab.id, { ...props.activeTab.filters, ...options });
      } else if (props.activeTab.mode === 'user') {
        props.fetchUser(props.activeTab.id, { ...props.activeTab.filters, ...options });
      }
    }
  })
)(TabsBody);