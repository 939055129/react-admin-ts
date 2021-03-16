/*
 * @Description: Night
 * @Date: 2021-02-19 14:37:01
 * @LastEditTime: 2021-03-16 17:03:52
 * @Version: 
 */
import { Menu } from 'antd';
import styled from 'styled-components';
import { useSelector, } from 'react-redux'
import { router, store, userInfo } from "@/utils/interface"
import routers from "@/router"
import { useAddNavItem } from "@/hooks"
const Wrap = styled.div`
height:100%;
width:100%;
overflow-y:scroll;
`
const { SubMenu } = Menu;
export default function Nav(props: any) {
  const addNavItem=useAddNavItem()
  let userInfo: userInfo = useSelector((state: store) => state.userInfo)
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
