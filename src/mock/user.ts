/*
 * @Description: Night
 * @Date: 2021-03-15 18:15:44
 * @LastEditTime: 2021-03-15 18:18:52
 * @Version: 
 */
import Mock from "mockjs"
const user = [
  {
    url: "/login",
    method: "post",
    response: (config: any) => {
      let body = JSON.parse(config.body)
      if (body.username === "admin" && body.password === "admin") {
        return {
          status: 1,
          data: {
            "name": Mock.Random.cname,
            "id": Mock.Random.id,
            "avatar": Mock.Random.image('200x100', '#4A7BF7', 'admin'),
            "auth": ['admin']
          },
          msg: "登录成功"
        }
      } else if (body.username === "night" && body.password === "night") {
        return {
          status: 1,
          data: {
            "name": Mock.Random.cname,
            "id": Mock.Random.id,
            "avatar": Mock.Random.image('200x100', '#4A7BF7', 'normal'),
            "auth": ['normal']
          },
          msg: "登录成功"
        }
      } else {
        return {
          status: 0,
          data: {},
          msg: "账号密码错误"
        }
      }
    }
  }
]
export default user
