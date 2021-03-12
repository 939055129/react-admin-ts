/*
 * @Description: Night
 * @Date: 2021-02-02 16:06:57
 * @LastEditTime: 2021-03-12 15:50:47
 * @Version: 
 */

// import { useLocation } from 'react-router-dom'
// import { decodeurl } from "@/utils/uitls"

import styled from "styled-components"
import Header from "@/components/header"
import SideBar from "@/components/sideBar"
import Content from "@/components/content"
import { Row, Col } from 'antd';

const Wrap = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
.content{
  box-sizing:border-box;
  height:0;
  flex:1;
  display:flex;
  width:100%;
  .ant-row{
    width:100%;
    height:100%
  }
  .ant-col{
    height:100%;
  }
}

`
export default function Layout() {

  return (
    <Wrap>
      <Header />
      <div className="content">
        <Row>
          <Col span={3}>  <SideBar /></Col>
          <Col span={21}>  <Content /></Col>
        </Row>
      </div>
    </Wrap>
  )
}
