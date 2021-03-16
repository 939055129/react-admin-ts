/*
 * @Description: Night
 * @Date: 2021-03-15 17:12:47
 * @LastEditTime: 2021-03-16 12:02:36
 * @Version: 
 */
import request from "../http"
import base from "../base"
let api = base.baseURL
function login(params: {}) {
  return request(`${api}/login`, {
    method: "post",
    data: params
  })
}
export {
  login
}