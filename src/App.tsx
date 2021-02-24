/*
 * @Description: Night
 * @Date: 2021-02-02 15:27:28
 * @LastEditTime: 2021-02-24 17:53:09
 * @FilePath: \app\src\App.tsx
 */


import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Layout from "@/layout/layout"
function App() {

  return (
    <Router>
      {/* <Header /> */}
      <div style={{ margin: '0 auto', minWidth: 1280, height: "100%" }}>
        <Layout />
      </div>
    </Router >
  );
}

export default App;
