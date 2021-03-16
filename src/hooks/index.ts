/*
 * @Description: Night
 * @Date: 2021-03-02 10:16:01
 * @LastEditTime: 2021-03-16 17:05:20
 * @Version: 
 */

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { router, store, } from "@/utils/interface"
import { addNav, changeNav } from "@/store/actionType"
type menu = Pick<router, "name" | "path">
export function useAddNavItem() {
  const History = useHistory()
  const navItem: menu[] = useSelector((state: store) => state.navItem)//访问过的页面
  const Dispatch = useDispatch()
  return (value: menu, path: string) => {
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

}