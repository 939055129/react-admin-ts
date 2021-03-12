/*
 * @Description: Night
 * @Date: 2021-02-19 18:30:54
 * @LastEditTime: 2021-03-12 18:22:56
 * @Version: 
 */
import { combineReducers } from 'redux'
import { ADD_NAV, REMOVE_NAV, CHANGE_NAV, CLEAR_NAV, Action } from "./actionType"
import defaultState from './state'
//添加删除已打开页面
function addOrDeletNav(state = defaultState.navItem, action: Action) {
  switch (action.type) {
    case ADD_NAV:
      return [...state, action.pramas]
    case REMOVE_NAV:
      return state.filter((item) => { return item.name !== action.pramas.name })
    case CLEAR_NAV:
      return []
    default:
      return state
  }
}
//修改当前活动页
function changeNav(state = defaultState.active, action: Action) {
  switch (action.type) {
    case CHANGE_NAV:
      return action.pramas
    default:
      return state
  }
}

export default combineReducers({ navItem: addOrDeletNav, active: changeNav })
