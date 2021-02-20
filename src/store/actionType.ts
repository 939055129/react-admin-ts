/*
 * @Description: Night
 * @Date: 2021-02-19 18:31:18
 * @LastEditTime: 2021-02-20 17:43:14
 * @Version: 
 */
export const ADD_NAV = 'ADD_NAV'
export const REMOVE_NAV = 'REMOVE_NAV'
export const CHANGE_NAV = 'CHANGE_NAV'
export interface Action {
  type: string,
  [propName: string]: any
}
export function addNav(prams: any): Action {
  return {
    type: ADD_NAV,
    prams
  }
}
export function removeNav(prams: any): Action {
  return {
    type: REMOVE_NAV,
    prams
  }
}
export function changeNav(prams: any): Action {
  return {
    type: CHANGE_NAV,
    prams
  }
}