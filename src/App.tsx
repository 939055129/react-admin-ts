/*
 * @Description: Night
 * @Date: 2021-02-02 15:27:28
 * @LastEditTime: 2021-02-23 15:26:47
 * @FilePath: \app\src\App.tsx
 */
import React, { lazy, Suspense, } from 'react';
import { Spin } from 'antd';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Layout from "@/layout/layout"
function App() {

  let isLogin = window.localStorage.getItem("isLogin")
  return (
    <Router>
      {/* <Header /> */}
      <div style={{ margin: '0 auto', minWidth: 1280, height: "100%" }}>
        <Suspense fallback={<Spin />}>
          {/* <Switch>
            <Route path="/" exact strict>
              {isLogin ? <Redirect to="/app" push /> : <Redirect to="/login" push />}
            </Route>
         
            {router.noLogin.map((item, index) => {
              return <Route path={item.path} exact key={item.name} component={lazy(item.components)} />
            })}
   
            {router.normalRouter.map((item, index) => {
              if (isLogin) {
                return <Route path={item.path} exact key={item.name} component={lazy(item.components)} />
              } else {
                return <Route path={item.path} exact key={item.name} >
                  <Redirect to="/login" push />
                </Route>
              }
            })}
         
            {router.adminRouter.map((item, index) => {
              if (isLogin) {
                return <Route path={item.path} exact key={item.name} component={lazy(item.components)} />
              } else {
                return <Route path={item.path} exact key={item.name} >
                  <Redirect to="/login" push />
                </Route>
              }
            })}
            <Route path="*" component={notfound} >
            </Route>
          </Switch> */}
          <Layout />
        </Suspense>
      </div>
    </Router >
  );
}

export default App;
