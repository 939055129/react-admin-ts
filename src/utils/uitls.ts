
/*
 * @Description: Night
 * @Date: 2021-02-18 15:53:33
 * @LastEditTime: 2021-02-19 15:25:55
 * @Version: 
 */
// url编码
export function encodeurl(prams: any): string {
  let url = ""
  for (const key in prams) {
    if (Object.prototype.hasOwnProperty.call(prams, key)) {
      url += encodeURI(key) + "=" + encodeURI(prams[key]) + "&"
    }
  }
  url = url.slice(0, -1)
  return url
}
// url解码
export function decodeurl(prams: string): object {
  let query: any = {}
  prams.substring(1).split("&").map((item) => {
    let a = item.split("=")
    query[decodeURI(a[0])] = decodeURI(a[1])
  })
  return query
}