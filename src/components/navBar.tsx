/*
 * @Description: Night
 * @Date: 2021-02-23 18:12:26
 * @LastEditTime: 2021-02-24 16:28:45
 * @Version: 
 */
import { Tag } from 'antd';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { store, menu } from "@/utils/interface"
import { removeNav } from "@/store/actionType"
import styled from 'styled-components';
const Wrap = styled.div`
margin-top:5px;
`
export default function NavBar() {
  const active: any = useSelector((state: store) => state.active)
  const navItem: any = useSelector((state: store) => state.navItem)
  const Dispatch = useDispatch()
  function preventDefault(e: any, pramas: menu) {
    e.preventDefault();
    Dispatch(removeNav(pramas))
  }
  return (
    <Wrap>
      {navItem.map((item: menu, index: number) => {
        return <Tag closable onClose={(e) => preventDefault(e, item)} color={active == item.name ? "#2db7f5" : ''} key={item.name}><Link to={item.path}>{item.name}</Link></Tag>
      })}

    </Wrap>
  )
}
