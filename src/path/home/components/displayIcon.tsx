import { FC, ReactChild, useState } from "react"
import styled from "styled-components"

/*
 * @Description: Night
 * @Date: 2021-02-25 17:46:25
 * @LastEditTime: 2021-03-12 14:32:10
 * @Version: 
 */
const Wrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:10px;
padding:20px 20px;
width:100%;
background-color:white;
border-radius:5px;
box-shadow:0px 5px 2px #dbdbdb;
cursor:pointer;
.icon-content{
  transition:all,1s;
}
`
export default function DisplayIcon(props:
  {
    Icon: FC<{
      style: any
    }>, children: ReactChild | string, Color: string, [props: string]: any
  }) {
  const { Icon, children, Color, } = props
  const [backColor, setBackColor] = useState("#fff")
  const [iconColor, setIconColor] = useState(Color)
  const onMouseEnter = () => {
    setBackColor(Color)
    setIconColor("#fff")
  }
  const onMouseLeave = () => {
    setBackColor("#fff")
    setIconColor(Color)
  }
  return (
    <Wrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="icon-content" style={{ backgroundColor: backColor, padding: 10, borderRadius: 5 }}>  <Icon style={{ fontSize: 26, color: iconColor }} /> </div>
      {children}
    </Wrap>
  )
}