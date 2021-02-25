import { FC } from "react";

/*
 * @Description: Night
 * @Date: 2021-02-22 13:48:06
 * @LastEditTime: 2021-02-25 17:08:45
 * @Version: 
 */
export interface router {
  name: string,
  path: string,
  icon?: FC|"",
  component?: any,
  children?: router[],
  [props: string]: any
}
export interface store {
  navItem: router[],
  active: any,
}