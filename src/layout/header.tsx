/*
 * @Description: Night
 * @Date: 2021-02-03 11:02:22
 * @LastEditTime: 2021-03-16 16:48:58
 * @Version: 
 */

import styled from 'styled-components'
import { Popover, Avatar } from 'antd';
import { useSelector } from "react-redux"
import { store, userInfo } from "@/utils/interface"
import { reomveCookie } from "@/utils/uitls"
import backImg from "../assets/img/header.jpg"
import logo from "../logo.svg"
const Wrap = styled.div`
box-sizing:border-box;
background-image:url(${backImg});
background-size:cover;
background-repeat:no-repeat;  
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:60px;
color:white;
min-width:1280px;
padding:0 36px;
.Avatar{
  display:flex;
  align-items:center;
}
a{
  color:white;
  list-style:none;
  text-decoration:none;
  margin-right:20px;
  &:hover{
  }
}
`
export default function Header() {
  const userInfo: userInfo = useSelector((state: store) => state.userInfo)
  const goOut = () => {
    reomveCookie("userInfo")
    window.location.reload()
  }
  return (
    <Wrap>
      <div>
        <img src={logo} style={{ width: 100 }} alt="logo"></img>
      </div>
      <div className="Avatar">
        <Popover content={(<a onClick={goOut} href="/#">退出登录</a>)}>
          <Avatar
            size="large"
            src={userInfo.avatar}
          />
        </Popover>
        {userInfo.name}
      </div>
    </Wrap>
  )
}