/*
 * @Description: Night
 * @Date: 2021-02-02 16:06:57
 * @LastEditTime: 2021-02-23 15:29:20
 * @Version: 
 */

// import { useLocation } from 'react-router-dom'
// import { decodeurl } from "@/utils/uitls"

import styled from "styled-components"
import Header from "@/components/header"
import SideBar from "@/components/sideBar"
import Content from "@/components/content"


const Wrap = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
.content{
  display:flex;
  width:100%;
}
.menu{
  width:250px;
  height:100%;
}
`
export default function Layout() {

  return (
    <Wrap>
      <Header />
      <div className="content">
        <SideBar />
        <Content />
      </div>
    </Wrap>
  )
}
