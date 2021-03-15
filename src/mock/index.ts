/*
 * @Description: Night
 * @Date: 2021-03-15 16:39:21
 * @LastEditTime: 2021-03-15 18:30:44
 * @Version: 
 */
import Mock from "mockjs"
import user from "./user"
const mocks = [
  ...user
]
function mockStart() {
  mocks.forEach(item => {
    return Mock.mock("/api" + item.url, item.method, item.response)
  })
}
export default mockStart