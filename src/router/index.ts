/*
 * @Description: Night
 * @Date: 2021-02-02 16:36:12
 * @LastEditTime: 2021-02-25 16:52:40
 * @Version: 
 */

import normalRouter from "./normalRouter"
import { adminRouter } from "./adminRouter"
import { router } from "@/utils/interface"
export interface menu {
  path: string,
  name: string,
  auth?: string[],
  children?: menu[],
  [propName: string]: any;
}
//不需要登陆
let noLogin: router[] = [
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
const routers = {
  normalRouter,
  adminRouter,
  noLogin
}
export default routers
