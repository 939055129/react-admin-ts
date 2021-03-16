/*
 * @Description: Night
 * @Date: 2021-02-03 16:34:07
 * @LastEditTime: 2021-03-16 16:11:21
 * @Version: 
 */
import { Button, Space } from 'antd';
import { useDispatch } from "react-redux"
import { LOGIN } from "@/store/asyncAction"
import { removeNav } from "@/store/actionType"
export default function Page(params: any) {
  const Dispatch = useDispatch()
  const changeAuth = async (auth: string) => {
    Dispatch(LOGIN({
      username: auth,
      password: auth
    }))
    if (auth === "night") {
      Dispatch(removeNav({ name: "admin", path: "/admin" }))
    }
  }
  return (
    <Space style={{ alignItems: "flex-start" }}>
      <Button type="primary" onClick={() => changeAuth('admin')}>切换为管理员权限</Button>
      <Button onClick={() => { changeAuth('night') }}> 切换为普通权限 </Button>
    </Space>
  )

}