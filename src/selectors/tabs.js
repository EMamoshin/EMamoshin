import { createSelector } from 'reselect';
import { selectActiveTabId } from './general';

export const selectTabs = state => state.tabs || [];
export const selectActiveTab = createSelector(selectTabs, selectActiveTabId, (tabs, id) => tabs.find(tab => tab.id === id) || {});
export const selectTabById = id => createSelector(selectTabs, tabs => tabs.find(tab => tab.id === id) || {});
export const selectTabLabel = id => createSelector(selectTabById(id), tab => tab.label);
export const selectTabLoading = id => createSelector(selectTabById(id), tab => tab.loading);
export const selectTabMode = id => createSelector(selectTabById(id), tab => tab.mode);
export const selectTabFilters = id => createSelector(selectTabById(id), tab => tab.filters);
export const selectTabResults = id => createSelector(selectActiveTab, tab => tab.results);

