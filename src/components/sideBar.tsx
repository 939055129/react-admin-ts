/*
 * @Description: Night
 * @Date: 2021-02-19 14:37:01
 * @LastEditTime: 2021-02-24 16:48:39
 * @Version: 
 */
import { Menu } from 'antd';
import { menu, store } from "@/utils/interface"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNav, changeNav } from "@/store/actionType"
import router from "@/assets/navMenu"
import { useHistory } from "react-router-dom"
const { SubMenu } = Menu;
let test = router
export default function Nav(props: any) {
  const [collapsed, setCollapsed] = useState(false)
  const navItem: menu[] = useSelector((state: store) => state.navItem)
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
      value.completePath = path
      Dispatch(addNav(value))
      Dispatch(changeNav(value.name))
    }
    History.push(path)
  }
  let renderMenu = (routers: menu[], lastPath: string = ""): any => {
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
    <Menu
      mode="vertical"
      theme="light"
      inlineCollapsed={collapsed}
      className="menu"
      triggerSubMenuAction="click"
    >
      {renderMenu(test)}
    </Menu>
  )
}
// const mapStateToProps = (state: store) => {
//   return {
//     navItem: state.navItem,
//     active: state.active
//   }
// }
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     addNav: (item: menu) => {
//       dispatch(addNav(item));
//     },
//     changeNav: (item: string) => { dispatch(changeNav(item)); }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Nav)