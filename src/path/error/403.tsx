/*
 * @Description: Night
 * @Date: 2021-02-24 18:17:11
 * @LastEditTime: 2021-03-16 16:58:56
 * @Version: 
 */
import { Result, Button } from 'antd';
import { useAddNavItem } from "@/hooks"
export default function Error403() {
  const AddNavItem = useAddNavItem()
  return (
    <Result
      status="403"
      style={{ background: "white", width: "100%" }}
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary" onClick={() => AddNavItem({ path: "/app", name: "首页" }, "/app")} > Back Home</ Button>}
    />
  )
}