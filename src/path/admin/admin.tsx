/*
 * @Description: Night
 * @Date: 2021-02-24 18:11:18
 * @LastEditTime: 2021-03-12 18:11:56
 * @Version: 
 */
import { Button } from 'antd';
import { setSession } from "@/utils/uitls"
import { removeNav, changeNav, addNav } from "@/store/actionType"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { store, router } from "@/utils/interface"
type menu = Pick<router, "name" | "path">
export default function Admin() {
  const navItem: menu[] = useSelector((state: store) => state.navItem)//访问过的页面
  const History = useHistory()
  const Dispatch = useDispatch()
  const change = () => {
    setSession('userInfo', {
      isLogin: true,
      auth: ["normal"]
    })
    Dispatch(removeNav({
      name: "admin"
    }))
    if (navItem.length === 1) {
      Dispatch(addNav({
        path: "/app",
        name: "首页"
      }))
      Dispatch(changeNav("首页"))
      History.push("/app")
    } else {
      History.push(navItem[0].path)
    }
  }
  return (
    <Button type="primary" size="middle" onClick={change}>
      切换为普通用户
    </Button>

  )
}