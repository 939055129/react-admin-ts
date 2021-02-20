/*
 * @Description: Night
 * @Date: 2021-02-19 14:37:01
 * @LastEditTime: 2021-02-20 17:49:11
 * @Version: 
 */
import { Menu } from 'antd';
import { menu } from "@/router"
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { useState } from 'react'
import { connect } from 'react-redux'
import { addNav, changeNav } from "@/store/actionType"
import router from "@/router"
const { SubMenu } = Menu;
function Nav(props: any) {
  const [collapsed, setCollapsed] = useState(false)
  const { navItem, active } = props
  let addNav = (value: any) => {
    if (navItem) {
      props.addNav(value)
    } else {
      props.changeNav()
    }

  }
  let renderMenu = (routers: menu[]): any => {
    return routers.map((item) => {
      if (item.children) {
        return <SubMenu key={item.name} title={item.name}>
          {renderMenu(item.children)}
        </SubMenu>
      } else {
        return <Menu.Item key={item.name} icon={<MailOutlined />} onClick={() => addNav(item)}>
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
      {renderMenu(router.normalRouter)}
    </Menu>
  )
}
const mapStateToProps = (state: any) => {
  return {
    navItem: state.navItem,
    active: state.active
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addNav: (item: menu) => {
      dispatch(addNav(item));
    },
    changeNav: (item: string) => { dispatch(changeNav(item)); }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)