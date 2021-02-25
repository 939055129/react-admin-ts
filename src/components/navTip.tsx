/*
 * @Description: Night
 * @Date: 2021-02-23 15:31:17
 * @LastEditTime: 2021-02-25 17:03:27
 * @Version: 
 */
import { Breadcrumb } from 'antd';
import { Link, useLocation } from "react-router-dom"
import { router } from "@/utils/interface"
import routers from "@/router"
import styled from 'styled-components';
const Wrap = styled.div`
box-sizing:border-box;
display:flex;
height:50px;
align-items:center;
padding:5px 10px;
padding-bottom:0;
box-shadow:0px 1px 2px #c0bebe ;
`
export default function NavTip() {
  let loction = useLocation().pathname.split("?")
  let pathname = loction[0].split("/")
  pathname.shift()
  let BreadcrumbItems: router[] = []
  const getTip = (router: router[], item: number, lastPath: string = "") => {
    router.forEach((value) => {
      if (value.path === "/" + pathname[item]) {
        let path = lastPath + value.path
        BreadcrumbItems.push({
          path: path,
          name: value.name,
        })
        if (value.children) {
          let index = item + 1
          getTip(value.children, index, path)
        } else {
          return false
        }
      } else {

      }
    })
  }
  getTip(routers.normalRouter, 0)
  getTip(routers.adminRouter, 0)
  return (
    <Wrap>
      <Breadcrumb>
        {BreadcrumbItems.map((item, index) => {
          if (BreadcrumbItems.length > 1) {
            return <Breadcrumb.Item key={index}>
              {index === 0 ? item.name : <Link to={item.path}>{item.name}</Link>}
            </Breadcrumb.Item>
          } else {
            return <Breadcrumb.Item key={index}>
              <Link to={item.path}>{item.name}</Link>
            </Breadcrumb.Item>
          }

        })}
      </Breadcrumb>
    </Wrap>
  )
}
