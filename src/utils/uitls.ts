
/*
 * @Description: Night
 * @Date: 2021-02-18 15:53:33
 * @LastEditTime: 2021-03-16 16:44:14
 * @Version: 
 */
import Cookies from "js-cookie"
export function encodePrams(prams: any): string {
  let url = ""
  for (const key in prams) {
    if (Object.prototype.hasOwnProperty.call(prams, key)) {
      url += encodeURI(key) + "=" + encodeURI(prams[key]) + "&"
    }
  }
  url = url.slice(0, -1)
  return url
}
export function decodePrams(prams: string): object {
  let query: any = {}
  prams.substring(1).split("&").map((item) => {
    let a = item.split("=")
    query[decodeURI(a[0])] = decodeURI(a[1])
    return ""
  })
  return query
}
export function getSession(key: string) {
  let res = window.sessionStorage.getItem(key)
  if (res) {
    return res
  } else {
    return ""
  }
}
export function setSession(key: string, params: any) {
  window.sessionStorage.setItem(key, JSON.stringify(params))
}
export function setCookie(key: string, value: any, expiresTime: number = 60 * 60 * 24) {
  let seconds = expiresTime
  let expires = new Date(new Date() as any * 1 + seconds * 1000)
  return Cookies.set(key, value, { expires: expires })
}

export function getCookie(key: string) {
  return Cookies.get(key)
}

export function reomveCookie(key: string) {
  return Cookies.remove(key)
}