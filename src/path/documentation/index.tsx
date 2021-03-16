/*
 * @Description: Night
 * @Date: 2021-02-03 16:34:07
 * @LastEditTime: 2021-03-16 16:16:45
 * @Version: 
 */
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
export default function Documentation(params: any) {
  console.log(params)
  return (
    <Result
      style={{ background: "white", width: "100%" }}
      icon={<SmileOutlined />}
      title="木有文档!"
      extra={<Button type="primary">link</Button>}
    />
  )

}