/*
 * @Description: Night
 * @Date: 2021-02-02 15:27:28
 * @LastEditTime: 2021-03-12 17:21:11
 * @FilePath: \app\src\App.tsx
 */


import { HashRouter as Router, Switch } from 'react-router-dom'
import NpRoute from "@/components/npRoute"
import { lazy, Suspense, } from 'react';
import { Spin } from 'antd';
import router from "@/router"
import './App.css';
import 'antd/dist/antd.css';
function App() {
  return (
    <Router>
      <div style={{ margin: '0 auto', minWidth: 1280, height: "100%" }}>
        <Suspense fallback={<Spin />}>
          <Switch>
            {router.noLogin.map((item, index) => {
              return <NpRoute path={item.path} exact key={item.name} component={lazy(item.components)} />
            })}
            <NpRoute path="/404" component={lazy(() => import("@/path/notfound"))} >
            </NpRoute>
            <NpRoute path="/" component={lazy(() => import("@/layout/layout"))} >
            </NpRoute>
          </Switch>
        </Suspense>
      </div>
    </Router >
  );
}

export default App;
