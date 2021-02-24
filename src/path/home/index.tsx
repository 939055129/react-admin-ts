/*
 * @Description: Night
 * @Date: 2021-02-02 16:06:57
 * @LastEditTime: 2021-02-24 18:06:00
 * @Version: 
 */

// import { useLocation } from 'react-router-dom'
// import { decodeurl } from "@/utils/uitls"

import styled from "styled-components"
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
export default function Home() {

  return (
    <Wrap>
      首页
    </Wrap>
  )
}
