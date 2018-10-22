import { ADD_TAB, REMOVE_TAB, CHANGE_FILTER, CHANGE_LABEL, SEARCH, SEARCH_SUCCESS, SEARCH_FAIL } from '../actions';

const defaultTabState = {
  id: null,
  label: 'Пустая вкладка',
  loading: null,
  mode: null,
  filters: {},
  results: {},
  error: null
};

const tabs = (state = [], action) => {
  switch (action.type) {
    case ADD_TAB:
      return state.concat([{
        ...defaultTabState,
        ...action.payload
      }]);
    case REMOVE_TAB:
      return state.filter(tab => tab.id !== action.payload.id);
    case CHANGE_FILTER:
      return state.map(tab => {
        if(tab.id === action.payload.id) {
          return {
            ...tab,
            filters: {
              ...tab.filters,
              [action.payload.field]: action.payload.value
            }
          }
        } else return tab;
      });
    case CHANGE_LABEL:
      return state.map(tab => {
        if(tab.id === action.payload.id) {
          return {
            ...tab,
            label: action.payload.label
          }
        } else return tab;
      });
    case SEARCH:
      return state.map(tab => {
        if(tab.id === action.payload.id) {
          return {
            ...tab,
            loading: true
          }
        } else return tab;
      });
    case SEARCH_SUCCESS:
      return state.map(tab => {
        if(tab.id === action.payload.id) {
          return {
            ...tab,
            loading: false,
            results: action.payload.results
          }
        } else return tab;
      });
    case SEARCH_FAIL:
      return state.map(tab => {
        if(tab.id === action.payload.id) {
          return {
            ...tab,
            loading: false,
            error: action.payload.error
          }
        } else return tab;
      });
    default:
      return state;
  }
};

export default tabs;