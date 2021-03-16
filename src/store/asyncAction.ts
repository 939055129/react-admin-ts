/*
 * @Description: Night
 * @Date: 2021-03-16 10:51:01
 * @LastEditTime: 2021-03-16 16:10:55
 * @Version: 
 */
import { setUserInfo } from "./actionType"
import { setCookie } from "@/utils/uitls"
import { login } from "@/http/api"
interface form {
  username: string,
  password: string,
}
export function LOGIN(from: form) {
  return async (dispatch: Function): Promise<boolean> => {
    let { data } = await login(from)//调用登录接口返回数据
    if (data) {
      setCookie("userInfo", data)//存cookie
      dispatch(setUserInfo(data))//存redux
      return Promise.resolve(true)//返回数据 进行页面跳转
    } else {
      return Promise.resolve(false)//返回数据 进行页面跳转
    }

  }
}