/*
 * @Description: Night
 * @Date: 2021-02-19 14:37:01
 * @LastEditTime: 2021-03-15 18:32:12
 * @Version: 
 */
import { Menu } from 'antd';
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { router, store, userInfo } from "@/utils/interface"
import { addNav, changeNav } from "@/store/actionType"
import routers from "@/router"
const Wrap = styled.div`
height:100%;
width:100%;
overflow-y:scroll;
`
const { SubMenu } = Menu;
type menu = Pick<router, "name" | "path">
export default function Nav(props: any) {
  const navItem: menu[] = useSelector((state: store) => state.navItem)
  let userInfo: userInfo = useSelector((state: store) => state.userInfo)
  const History = useHistory()
  const Dispatch = useDispatch()
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
