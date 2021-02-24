/*
 * @Description: Night
 * @Date: 2021-02-22 13:48:06
 * @LastEditTime: 2021-02-24 14:55:58
 * @Version: 
 */
import { ReactNode, ReactDOM } from "react"
export interface menu {
  name: string,
  path: string,
  icon?: any,
  component?: ReactNode,
  children?: menu[],
  [props: string]: any
}
export interface store {
  navItem: menu[],
  active: any,
}