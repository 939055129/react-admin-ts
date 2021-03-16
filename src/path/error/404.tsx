/*
 * @Description: Night
 * @Date: 2021-02-24 18:17:11
 * @LastEditTime: 2021-03-16 17:05:52
 * @Version: 
 */
import { Result, Button } from 'antd';
import { useAddNavItem } from "@/hooks"
export default function Error404() {
  const AddNavItem = useAddNavItem()
  return (
    <Result
      status="404"
      style={{ background: "white", width: "100%" }}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => AddNavItem({ path: "/app", name: "首页" }, "/app")}>Back Home</Button>}
    />
  )
}