/*
 * @Description: Night
 * @Date: 2021-02-04 16:15:28
 * @LastEditTime: 2021-02-25 15:02:27
 * @Version: 
 */

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { encodePrams } from "@/utils/uitls"
const Wrap = styled.div`
.login-form{
  margin:0 auto;
  width:300px;
}
`
export default function Login() {
  const History = useHistory()
  const onFinish = (values: any) => {
    let query = encodePrams({
      test: 132,
      name: "TEST"
    })
    console.log(query)
    window.localStorage.setItem("isLogin", "true")
    History.push({
      pathname: "/app",
      state: 123,
      search: query
    })
    console.log('Received values of form: ', values);
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
            忘记密码
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