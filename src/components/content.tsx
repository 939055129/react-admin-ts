/*
 * @Description: Night
 * @Date: 2021-02-19 15:07:55
 * @LastEditTime: 2021-02-25 17:39:19
 * @Version: 
 */

import { lazy, Suspense, } from 'react';
import { Spin } from 'antd';
import { Switch, Redirect } from 'react-router-dom'
import NpRoute from "./npRoute"
import styled from "styled-components"
import { router } from "@/utils/interface"
import routers from "@/router"
import NavTip from "./navTip"
import NavBar from "./navBar"
const Wrap = styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
height:100%;
.content{
  margin-top:5px;
  flex:1;
  height:0;
 background-color:#f0f0f0;
}
`
let renderMenu = (routers: router[], lastPath: string = ""): any => {
  return routers.map((item) => {
    let path = lastPath + item.path
    if (item.children) {
      return renderMenu(item.children, item.path)
    } else {
      return <NpRoute path={path} exact key={item.name} component={lazy(item.component)} />
    }
  })
}
export default function NavMenu(props: any) {
  let isLogin = window.localStorage.getItem("isLogin")
  return (
    <Wrap>
      <NavTip />
      <NavBar />
      <div className="content" >
        <Suspense fallback={<Spin />}>
          <Switch>
            <NpRoute path="/" exact strict>
              {isLogin ? <Redirect to="/app" push /> : <Redirect to="/login" push />}
            </NpRoute>
            {/* 普通页面 */}
            {renderMenu(routers.normalRouter)}
            {/* 管理员页面 */}
            {routers.adminRouter.map((item, index) => {
              if (isLogin) {
                return <NpRoute path={item.path} exact key={item.name} component={lazy(item.component)} />
              } else {
                return <NpRoute path={item.path} exact key={item.name} >
                  <Redirect to="/login" push />
                </NpRoute>
              }
            })}
            <NpRoute path="*" >
              <Redirect to="/404" />
            </NpRoute>
          </Switch>
        </Suspense>
      </div>
    </Wrap>
  )
}