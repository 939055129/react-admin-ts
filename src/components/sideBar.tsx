/*
 * @Description: Night
 * @Date: 2021-02-19 14:37:01
 * @LastEditTime: 2021-03-12 18:00:48
 * @Version: 
 */
import { Menu } from 'antd';
import { router, store } from "@/utils/interface"
import { useSelector, useDispatch } from 'react-redux'
import { addNav, changeNav } from "@/store/actionType"
import routers from "@/router"
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { getSession } from "@/utils/uitls"
const Wrap = styled.div`
height:100%;
width:100%;
overflow-y:scroll;
`
const { SubMenu } = Menu;
type menu = Pick<router, "name" | "path">
export default function Nav(props: any) {
  const navItem: menu[] = useSelector((state: store) => state.navItem)
  const History = useHistory()
  const Dispatch = useDispatch()
  let userInfo: {
    isLogin: boolean,
    auth: [],
  } = JSON.parse(getSession("userInfo"))
  let addNavItem = (value: menu, path: string) => {
    /**
  * @description: 判断是否存在如果存在便不添加menuItem
  * @event: 
  * @param {*} navItem
  * @return {*}
  */
    if (navItem.some((item: menu) => { return item.name === value.name })) {
      Dispatch(changeNav(value.name))
    } else {
      let menuItem = JSON.parse(JSON.stringify(value))
      menuItem.path = path
      Dispatch(addNav(menuItem))
      Dispatch(changeNav(menuItem.name))
    }
    History.push(path)
  }
  let renderMenu = (routers: router[], lastPath: string = ""): any => {
    return routers.map((item) => {
      let path = lastPath + item.path
      if (item.children) {
        return <SubMenu key={item.name} title={item.name} icon={item.icon ? <item.icon /> : ""}>
          {renderMenu(item.children, item.path)}
        </SubMenu>
      } else {
        return <Menu.Item key={item.name} icon={item.icon ? <item.icon /> : ""} onClick={() => addNavItem(item, path)}>
          {item.name}
        </Menu.Item>
      }
    })
  }
  return (
    <Wrap >
      <Menu
        mode="inline"
        theme="light"
        className="menu"
        triggerSubMenuAction="click"
      >
        {userInfo.auth.some(value => value === "admin") ? renderMenu(routers.adminRouter) : ''}
        {renderMenu(routers.normalRouter)}
      </Menu>
    </Wrap>
  )
}
