import { ADD_TAB, CHANGE_ACTIVE_TAB } from '../actions';

const defaultTabState = {
  activeTab: null,
};

const tabs = (state = defaultTabState, action) => {
  switch (action.type) {
    case ADD_TAB:
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload.id
      };
    default:
      return state;
  }
};

export default tabs;