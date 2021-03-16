/*
 * @Description: Night
 * @Date: 2021-02-19 18:31:18
 * @LastEditTime: 2021-03-16 15:42:12
 * @Version: 
 */
export const ADD_NAV = 'ADD_NAV'
export const REMOVE_NAV = 'REMOVE_NAV'
export const CHANGE_NAV = 'CHANGE_NAV'
export const SET_USERINFO = 'SET_USERINFO'
export interface Action {
  type: string,
  [propName: string]: any
}
export function addNav(pramas: any): Action {
  return {
    type: ADD_NAV,
    pramas
  }
}
export function removeNav(pramas: any): Action {
  return {
    type: REMOVE_NAV,
    pramas
  }
}
export function changeNav(pramas: any): Action {
  return {
    type: CHANGE_NAV,
    pramas
  }
}
export function setUserInfo(pramas: {}): Action {
  return {
    type: SET_USERINFO,
    pramas
  }
}