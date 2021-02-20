/*
 * @Description: Night
 * @Date: 2021-02-02 16:36:12
 * @LastEditTime: 2021-02-20 16:34:01
 * @Version: 
 */

import { normalRouter } from "./normalRouter"
import { adminRouter } from "./adminRouter"
export interface menu {
  path: string,
  name: string,
  auth: string[],
  children?: menu[],
  [propName: string]: any;
}
//不需要登陆
let noLogin: menu[] = [
  {
    path: "/login",
    name: "login",
    auth: ["normal"],
    components: () => import('@/path/login'),
  },
  {
    path: "/register",
    name: "register",
    auth: ["normal"],
    components: () => import('@/path/register'),
  }
]
const router = {
  normalRouter,
  adminRouter,
  noLogin
}
export default router 
