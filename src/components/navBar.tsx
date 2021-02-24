/*
 * @Description: Night
 * @Date: 2021-02-23 18:12:26
 * @LastEditTime: 2021-02-24 18:03:28
 * @Version: 
 */
import { Tag } from 'antd';
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { store, menu } from "@/utils/interface"
import { removeNav, changeNav } from "@/store/actionType"
import styled from 'styled-components';
const Wrap = styled.div`
margin-top:5px;
height:30px;
`
export default function NavBar() {
  const History = useHistory()
  const active: any = useSelector((state: store) => state.active)
  const navItem: menu[] = useSelector((state: store) => state.navItem)
  console.log(navItem)
  const Dispatch = useDispatch()
  function preventDefault(e: any, pramas: menu) {
    e.preventDefault();
    Dispatch(removeNav(pramas))
    if (pramas.name === active) {
      if (pramas.name === navItem[0].name) {
        Dispatch(changeNav(navItem[1].name))
        History.push(navItem[1].name)
      } else {
        Dispatch(changeNav(navItem[0].name))
        History.push(navItem[0].name)
      }

    }
  }
  function changePath(pramas: menu) {
    Dispatch(changeNav(pramas.name))
  }
  return (
    <Wrap>
      {navItem.map((item: menu, index: number) => {
        return <Tag closable onClick={() => changePath(item)} onClose={(e) => preventDefault(e, item)} color={active === item.name ? "#2db7f5" : ''} key={item.name}><Link to={item.completePath}>{item.name}</Link></Tag>
      })}

    </Wrap>
  )
}
