/*
 * @Description: Night
 * @Date: 2021-03-15 17:12:47
 * @LastEditTime: 2021-03-15 17:15:46
 * @Version: 
 */
import request from "../http"
function login(params: {}) {
  return request('/login', {
    method: "post",
    data: params
  })
}
export {
  login
}