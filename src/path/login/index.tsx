/*
 * @Description: Night
 * @Date: 2021-02-04 16:15:28
 * @LastEditTime: 2021-03-12 18:17:59
 * @Version: 
 */

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { setSession } from "@/utils/uitls"
const Wrap = styled.div`
.login-form{
  margin:0 auto;
  width:300px;
}
`
interface form {
  username: string,
  password: string,
  remember: boolean,
}
export default function Login() {
  const History = useHistory()
  const onFinish = (form: form) => {
    if (form.username == "admin") {
      setSession('userInfo', {
        isLogin: true,
        auth: ["admin"]
      })
    } else {
      setSession('userInfo', {
        isLogin: true,
        auth: ["normal"]
      })
    }
    History.push({
      pathname: "/app",
    })
  };
  return (
    <Wrap >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="avascript:void(0)">
            账号密码随便输   <br /> 管理员账号admin 密码随便输
      </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
      </Button>
        </Form.Item>
      </Form>
    </Wrap>
  )
}