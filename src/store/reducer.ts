/*
 * @Description: Night
 * @Date: 2021-02-19 18:30:54
 * @LastEditTime: 2021-02-20 17:46:51
 * @Version: 
 */
import { combineReducers } from 'redux'
import { ADD_NAV, REMOVE_NAV, CHANGE_NAV, Action } from "./actionType"
import defaultState from './state'
//添加删除已打开页面
function addOrDeletNav(state = defaultState.navItem, action: Action) {
  switch (action.type) {
    case ADD_NAV:
      return [...state, action.prams]
    case REMOVE_NAV:
      return state.filter((item: any) => item.id != action.id)
    default:
      return state
  }
}
//修改当前活动页
function changeNav(state = defaultState.activty, action: Action) {
  switch (action.type) {
    case CHANGE_NAV:
      return action.prams
    default:
      return state
  }

}
export default combineReducers({ navItem: addOrDeletNav, active: changeNav })
