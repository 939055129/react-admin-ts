/*
 * @Description: Night
 * @Date: 2021-02-23 18:12:26
 * @LastEditTime: 2021-02-25 15:55:52
 * @Version: 
 */
import { Tag } from 'antd';
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { store, menu } from "@/utils/interface"
import { removeNav, changeNav } from "@/store/actionType"
import styled from 'styled-components';
const Wrap = styled.div`
box-sizing:border-box;
flex-wrap:nowrap;
overflow-x:scroll;
white-space:nowrap;
margin-top:5px;
padding:5px 10px;
padding-top:10px;
box-shadow:0px 1px 2px #c0bebe;
`
export default function NavBar() {
  const History = useHistory()
  const active: any = useSelector((state: store) => state.active)
  const navItem: menu[] = useSelector((state: store) => state.navItem)
  const Dispatch = useDispatch()
  function preventDefault(e: any, pramas: menu) {
    e.preventDefault();
    Dispatch(removeNav(pramas))
    if (pramas.name === active) {
      if (pramas.name === navItem[0].name) {
        Dispatch(changeNav(navItem[1].name))
        History.push(navItem[1].path)
      } else {
        Dispatch(changeNav(navItem[0].name))
        History.push(navItem[0].path)
      }
    }
  }
  function changePath(pramas: menu) {
    Dispatch(changeNav(pramas.name))
  }
  function yWheel(e: any) {
    e.currentTarget.scrollLeft += e.deltaY;
  }
  return (
    <Wrap onWheel={yWheel} style={{ display: navItem.length == 0 ? "none" : "block" }}>
      {navItem.map((item: menu, index: number) => {
        return <Tag closable onClick={() => changePath(item)}
          onClose={(e) => preventDefault(e, item)} color={active === item.name ? "#2db7f5" : ''} key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </Tag>
      })}
    </Wrap>
  )
}
