/*
 * @Description: Night
 * @Date: 2021-02-19 15:07:55
 * @LastEditTime: 2021-02-24 17:54:26
 * @Version: 
 */

import { lazy, Suspense, } from 'react';
import { Spin } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from "styled-components"
import { menu } from "@/router"
import router from "@/router"
import NavTip from "./navTip"
import NavBar from "./navBar"
const Wrap = styled.div`
width:100%;
margin:5px;
`
let renderMenu = (routers: menu[], lastPath: string = ""): any => {
  return routers.map((item) => {
    let path = lastPath + item.path
    if (item.children) {
      return renderMenu(item.children, item.path)
    } else {
      return <Route path={path} exact key={item.name} component={lazy(item.component)} />
    }
  })
}
export default function NavMenu(props: any) {
  let isLogin = window.localStorage.getItem("isLogin")
  return (
    <Wrap>
      <NavTip />
      <NavBar />
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route path="/" exact strict>
            {isLogin ? <Redirect to="/app" push /> : <Redirect to="/login" push />}
          </Route>
          {/* 不需要登录页面 */}
          {router.noLogin.map((item, index) => {
            return <Route path={item.path} exact key={item.name} component={lazy(item.components)} />
          })}
          {/* 普通页面 */}
          {renderMenu(router.normalRouter)}
          {/* 管理员页面 */}
          {router.adminRouter.map((item, index) => {
            if (isLogin) {
              return <Route path={item.path} exact key={item.name} component={lazy(item.components)} />
            } else {
              return <Route path={item.path} exact key={item.name} >
                <Redirect to="/login" push />
              </Route>
            }
          })}
          <Route path="*" >
            <Redirect to="/error/404" push />
          </Route>
        </Switch>
      </Suspense>
    </Wrap>
  )
}