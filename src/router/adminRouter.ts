/*
 * @Description: Night
 * @Date: 2021-02-20 16:18:58
 * @LastEditTime: 2021-02-20 16:19:18
 * @Version: 
 */
import { menu } from "./index"
export const adminRouter: menu[] = [
  {
    path: "/admin",
    name: "admin",
    auth: ["admin"],
    components: ""
  }
]