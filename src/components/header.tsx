/*
 * @Description: Night
 * @Date: 2021-02-03 11:02:22
 * @LastEditTime: 2021-03-12 15:50:38
 * @Version: 
 */
import backImg from "../assets/img/header.jpg"
import logo from "../logo.svg"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Popover } from 'antd';
import { Avatar, } from 'antd';
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

  return (
    <Wrap>
      <div>
        <img src={logo} style={{ width: 100 }} alt="logo"></img>
      </div>
      <div className="Avatar">
        <Popover content={(<Link to={`/login?id=${12}`}>退出登录</Link>)}>
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Popover>
        <Link to={`/login?id=${12}`}>MRliu</Link>
      </div>
    </Wrap>
  )
} 