/*
 * @Description: Night
 * @Date: 2021-03-15 16:39:21
 * @LastEditTime: 2021-03-16 09:53:06
 * @Version: 
 */
import Mock from "mockjs"
import user from "./user"
const mocks = [
  ...user
]
function mockStart() {
  Mock.setup({
    timeout: '200-600'
  })
  mocks.forEach(item => {
    return Mock.mock("/api" + item.url, item.method, item.response)
  })
}
export default mockStart