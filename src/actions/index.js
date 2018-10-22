export const ADD_TAB = 'ADD_TAB';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const REMOVE_TAB = 'REMOVE_TAB';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const CHANGE_LABEL = 'CHANGE_LABEL';

export const addTab = (id, mode) => ({
  type: ADD_TAB,
  payload: {
    id,
    mode
  }
});

export const changeActiveTab = (id) => ({
  type: CHANGE_ACTIVE_TAB,
  payload: {
    id
  }
});

export const removeTab = (id) => ({
  type: REMOVE_TAB,
  payload: {
    id
  }
});

export const changeFilter = (id, field, value) => ({
  type: CHANGE_FILTER,
  payload: {
    id,
    field,
    value,
  }
});

export const search = (id) => ({
  type: SEARCH,
  payload: {
    id
  }
});

export const searchSuccess = (id, results) => ({
  type: SEARCH_SUCCESS,
  payload: {
    id,
    results
  }
});

export const searchFail = (id, error) => ({
  type: SEARCH_FAIL,
  payload: {
    id,
    error
  }
});

export const changeLabel = (id, label) => ({
  type: CHANGE_LABEL,
  payload: {
    id,
    label
  }
});

export const fetchRepo = (tabId, { query, minStars, minForks, fork, page = 0 } = {}) => (dispatch, getState, { api }) => {
  // stars : >=200
  // forks : >=100
  // fork : only | true | false
  const params = [];
  minStars && params.push(`stars:>=${minStars}`);
  minForks && params.push(`forks:>=${minForks}`);
  fork && params.push(`fork:${fork}`);
  dispatch(search(tabId));
  dispatch(changeLabel(tabId, `Р - ${query}`));
  return api.search
    .repos({
      q: params.concat([query]).join(' '),
      per_page: 10,
      page
    })
    .then((response) => {
      dispatch(searchSuccess(tabId, response.data));
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      dispatch(searchFail(tabId, error));
      console.error(error);
    });
};

export const fetchUser = (tabId, { query, followers, repos, type, page = 0 } = {}) => (dispatch, getState, { api }) => {
  // stars : >=200
  // forks : >=100
  // fork : only | true | false
  const params = [];
  followers && params.push(`followers:>=${followers}`);
  repos && params.push(`repos:>=${repos}`);
  type && params.push(`type:${type}`);
  dispatch(search(tabId));
  dispatch(changeLabel(tabId, `П - ${query}`));
  return api.search
    .users({
      q: params.concat([query]).join(' '),
      per_page: 10,
      page
    })
    .then((response) => {
      dispatch(searchSuccess(tabId, response.data));
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      dispatch(searchFail(tabId, error));
      console.error(error);
    });
};


