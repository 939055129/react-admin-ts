/*
 * @Description: Night
 * @Date: 2021-02-19 15:07:55
 * @LastEditTime: 2021-02-20 17:38:13
 * @Version: 
 */
import { Tabs } from 'antd';
import { useState } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import { removeNav } from "@/store/actionType"
import { menu } from "@/router"
const Wrap = styled.div`
width:100%;
margin:5px;
`
const { TabPane } = Tabs;
function NavMenu(props: any) {
  let { navItem } = props
  const [activeKey, setActiveKey] = useState("主页")

  const onChange = (activeKey: any) => {
    setActiveKey(activeKey)
  }
  const onEdit = (targetKey: any, action: any) => {
    let lastIndex: any
    navItem.forEach((pane: menu, i: number) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    let nowPanes = navItem.filter((pane: menu) => pane.name !== targetKey)
    if (navItem.length && activeKey === targetKey) {
      if (nowPanes.length > 0) {
        lastIndex >= 0 ?
          setActiveKey(nowPanes[lastIndex].name)
          :
          setActiveKey(nowPanes[0].name)
      }
    }
  }
  return (
    <Wrap>
      <Tabs
        hideAdd
        activeKey={activeKey}
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
      </Tabs>
    </Wrap>
  )
}
const mapStateToProps = (state: any) => {
  return {
    navItem: state.navItem,
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    click: () => {
      dispatch(removeNav("test"));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)