/*
 * @Description: Night
 * @Date: 2021-02-19 15:07:55
 * @LastEditTime: 2021-03-16 15:54:42
 * @Version: 
 */

import { lazy, Suspense, } from 'react';
import { Spin } from 'antd';
import { Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NpRoute from "@/components/npRoute"
import styled from "styled-components"
import { router, userInfo, store } from "@/utils/interface"
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
 overflow-y:scroll;
}
`
export default function NavMenu(props: any) {
  let userInfo: userInfo = useSelector((state: store) => state.userInfo)
  let isLogin = userInfo.name
  let renderMenu = (routers: router[], lastPath: string = ""): any => {
    return routers.map((item) => {
      let path = lastPath + item.path
      if (item.children) {
        return renderMenu(item.children, item.path)
      } else {
        if (isLogin) {
          return <NpRoute path={path} exact key={item.name} component={lazy(item.component)} />
        } else {
          return <NpRoute path={path} exact key={item.name} >
            <Redirect to="/login" push />
          </NpRoute>
        }
      }
    })
  }
  return (
    <Wrap>
      <NavTip />
      <NavBar />
      <div className="content" >
        <Suspense fallback={<Spin />}>
          <Switch>
            <NpRoute path="/" exact >
              {isLogin ? <Redirect to="/app" push /> : <Redirect to="/login" push />}
            </NpRoute>
            {/* 普通页面 */}
            {renderMenu(routers.normalRouter)}
            {/* 管理员页面 */}
            {routers.adminRouter.map((item) => {
              if (userInfo.auth.some(value => value === "admin")) {
                return <NpRoute path={item.path} exact key={item.name} component={lazy(item.component)} />
              } else {
                return ""
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