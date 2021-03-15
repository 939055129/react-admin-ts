import { FC } from "react";

/*
 * @Description: Night
 * @Date: 2021-02-22 13:48:06
 * @LastEditTime: 2021-03-15 15:53:51
 * @Version: 
 */
export interface userInfo {
  name: string,
  id: number,
  avatar: string
  auth: []
}
export interface router {
  name: string,
  path: string,
  icon?: FC | "",
  component?: any,
  children?: router[],
  [props: string]: any
}
export interface store {
  navItem: router[],
  active: any,
  userInfo: userInfo
}