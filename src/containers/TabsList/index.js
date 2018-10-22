import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { last, isEmpty } from 'lodash';
import { changeActiveTab, removeTab } from '../../actions'
import { selectActiveTabId, selectTabs } from '../../selectors'
import List from './List';

const mapStateToProps = createStructuredSelector({
  tabs: selectTabs,
  activeTabId: selectActiveTabId
});

const mapDispatchToProps = dispatch => ({
  changeActiveTab: bindActionCreators(changeActiveTab, dispatch),
  removeTab: bindActionCreators(removeTab, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChangeActiveTab: ({ changeActiveTab }) => ({ key }) => {
      changeActiveTab(key);
    },
    handleRemoveTab: ({ removeTab, changeActiveTab, tabs }) => (id) => {
      const newTabs = last(tabs.filter(tab => tab.id !== id));
      removeTab(id);
      !isEmpty(newTabs) && changeActiveTab(newTabs.id);
    }
  })
)(List);