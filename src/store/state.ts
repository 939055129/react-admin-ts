/*
 * @Description: Night
 * @Date: 2021-02-20 14:32:30
 * @LastEditTime: 2021-03-16 16:23:55
 * @Version: 
 */
import { store, } from "@/utils/interface"
import { getCookie } from "@/utils/uitls"
let value = getCookie("userInfo")
const state: store = {
  navItem: [],
  active: "",
  userInfo: value ? JSON.parse(value) : {
    name: "",
    id: 0,
    avatar: "",
    auth: [],
    token: ""
  }
}
export default state