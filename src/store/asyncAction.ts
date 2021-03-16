/*
 * @Description: Night
 * @Date: 2021-03-16 10:51:01
 * @LastEditTime: 2021-03-16 14:17:00
 * @Version: 
 */
import { setUserInfo } from "./actionType"
import { setCookie } from "@/utils/uitls"
import { login } from "@/http/api"
export function LOGIN(from: {}) {
  return async (dispatch: (ass: any) => Promise<any>): Promise<number> => {
    let { data } = await login(from)//调用登录接口返回数据
    setCookie("userInfo", data)//存cookie
    dispatch(setUserInfo(data))//存redux
    return Promise.resolve(123)//返回一个数据 进行页面跳转
  }
}