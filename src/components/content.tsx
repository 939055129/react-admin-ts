/*
 * @Description: Night
 * @Date: 2021-02-19 15:07:55
 * @LastEditTime: 2021-02-24 16:26:25
 * @Version: 
 */
import { Tabs } from 'antd';
import { useState } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import { removeNav } from "@/store/actionType"
import { menu } from "@/router"
import NavTip from "./navTip"
import NavBar from "./navBar"
const Wrap = styled.div`
width:100%;
margin:5px;
`
export default function NavMenu(props: any) {
  return (
    <Wrap>
      <NavTip />
      <NavBar />
      {/* <Tabs
        hideAdd
        activeKey={active}
        onChange={onChange}
        type="editable-card"
        onEdit={onEdit}
        animated={true}
        size="small"
      >
        <TabPane tab="主页" key="主页">
          主页
        </TabPane>
        {navItem.map((pane: menu) => (
          <TabPane tab={pane.name} key={pane.name}>
            {pane.name}
          </TabPane>
        ))}
      </Tabs> */}
    </Wrap>
  )
}