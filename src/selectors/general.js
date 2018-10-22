import { createSelector } from 'reselect';

export const selectGeneral = state => state.general || [];
export const selectActiveTabId = createSelector(selectGeneral, general => general.activeTab);