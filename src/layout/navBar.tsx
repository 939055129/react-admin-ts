/*
 * @Description: Night
 * @Date: 2021-02-23 18:12:26
 * @LastEditTime: 2021-03-12 16:26:04
 * @Version: 
 */
import { Tag } from 'antd';
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { store, router } from "@/utils/interface"
import { removeNav, changeNav, addNav } from "@/store/actionType"
import styled from 'styled-components';
const Wrap = styled.div`
box-sizing:border-box;

flex-wrap:nowrap;
overflow-x:scroll;
white-space:nowrap;
margin-top:10px;
padding:5px 10px;
padding-top:10px;
box-shadow:0px 1px 2px #c0bebe;
`
type menu = Pick<router, "name" | "path">
export default function NavBar() {
  const History = useHistory()
  const active: string = useSelector((state: store) => state.active)//当前页
  const navItem: menu[] = useSelector((state: store) => state.navItem)//访问过的页面
  const Dispatch = useDispatch()
  /**
   * @description: 关闭tag标签
   * @event: 
   * @param {any} e
   * @param {router} pramas
   * @return {*}
   */
  function preventDefault(e: any, pramas: menu) {
    e.preventDefault();
    Dispatch(removeNav(pramas))
    if (navItem.length === 1) {
      Dispatch(addNav({
        path: "/app",
        name: "首页"
      }))
      Dispatch(changeNav("首页"))
      History.push("/app")
    } else {
      if (pramas.name === active) {//是当前活动页
        if (pramas.name === navItem[0].name) {//是第一个
          Dispatch(changeNav(navItem[1].name))
          History.push(navItem[1].path)
        } else {
          Dispatch(changeNav(navItem[0].name))
          History.push(navItem[0].path)
        }
      }
    }

  }
  /**
   * @description: 切换页面
   * @event: 
   * @param {menu} pramas
   * @return {*}
   */
  function changePath(pramas: menu) {
    Dispatch(changeNav(pramas.name))
  }
  function yWheel(e: any) {
    e.currentTarget.scrollLeft += e.deltaY;
  }
  return (
    <Wrap onWheel={yWheel} style={{ display: navItem.length === 0 ? "none" : "block" }}>
      {navItem.map((item: menu, index: number) => {
        return <Tag closable onClick={() => changePath(item)}
          onClose={(e) => preventDefault(e, item)} color={active === item.name ? "#2db7f5" : ''} key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </Tag>
      })}
    </Wrap>
  )
}
