/*
 * @Description: Night
 * @Date: 2021-03-15 17:03:42
 * @LastEditTime: 2021-03-15 18:14:01
 * @Version: 
 */
import axios from "axios"
import { message } from 'antd';
const errorTip = (code: number) => {
  switch (code) {
    case 404:
      message.error("网络请求不存在")
      break;
    case 500:
      message.error("服务器错误")
      break;
    default:
      break;
  }
}
let request = axios.create(
  {
    timeout: 6000,
    baseURL: '/api',
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      // "Content-Type": "application/json;"
    }
  }
)
request.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});
request.interceptors.response.use(
  res => {
    console.log(res)
    if (res.status === 200) {
      if (res.data.status === 1) {
        return Promise.resolve(res.data)
      } else {
        message.error(res.data.msg)
        return Promise.resolve(res.data)
      }
    } else {
      return Promise.reject(res.data)
    }

  },
  error => {
    const { response } = error
    if (response) {
      errorTip(error.response.status)
      return Promise.reject(response);
    } else {
      message.error("请求超时")
    }
  }
)
export default request