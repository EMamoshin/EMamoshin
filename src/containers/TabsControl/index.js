import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose';
import { uniqueId } from 'lodash';
import { addTab } from '../../actions'
import Buttons from './Buttons';

const mapDispatchToProps = dispatch => ({
  addTab: bindActionCreators(addTab, dispatch)
});

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    handleNewRepoTab: props => () => {
      props.addTab(uniqueId('tab_'), 'repo');
    },
    handleNewUserTab: props => () => {
      props.addTab(uniqueId('tab_'), 'user');
    }
  })
)(Buttons);