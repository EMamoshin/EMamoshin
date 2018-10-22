import { combineReducers } from 'redux'
import general from './general'
import tabs from './tabs'

export default combineReducers({
  general,
  tabs
});