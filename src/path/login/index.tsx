/*
 * @Description: Night
 * @Date: 2021-02-04 16:15:28
 * @LastEditTime: 2021-03-16 15:24:12
 * @Version: 
 */

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { LOGIN } from "@/store/asyncAction"
import backImg from "@/assets/img/login.jpg"

const Wrap = styled.div`
 background-image:url(${backImg});
 height:100%;
background-size:cover;
.login-form{
  margin:0 auto;
  width:300px;
  padding-top:300px;
  text-align:center;
}
`
interface form {
  username: string,
  password: string,
}
export default function Login() {
  const History = useHistory()
  const Dispatch: ReturnType<typeof LOGIN> = useDispatch()
  const onFinish = async (form: form) => {
    let res: boolean = await Dispatch(LOGIN(form))
    if (res) {
      History.push({
        pathname: "/app"
      })
    }
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
          <a className="login-form-forgot" href="avascript:void(0)">
            游客账号night 游客密码night   <br /> 管理员账号admin 密码admin
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