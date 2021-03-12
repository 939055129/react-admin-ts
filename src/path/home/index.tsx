/*
 * @Description: Night
 * @Date: 2021-02-02 16:06:57
 * @LastEditTime: 2021-03-12 16:54:40
 * @Version: 
 */

// import { useLocation } from 'react-router-dom'
// import { decodeurl } from "@/utils/uitls"
import DisplayIcon from "./components/displayIcon"
import CommentList from "./components/comment"
import { useState, useEffect } from "react"
import {
  HomeOutlined,
  MessageOutlined,
  MoneyCollectOutlined,
  PayCircleOutlined,
} from '@ant-design/icons';
import LineEchart from "./components/lineEchart"
import BarEchart from "./components/barEchart"
import PieEchart from "./components/pieEchart"
import RadarEchart from "./components/radarEchart"
import Wrap from "./homeCSS"
export default function Home() {
  const [itemList] = useState([
    {
      icon: HomeOutlined,
      text: "访问量",
      number: 6,
      Color: "rgb(64,201,198)"
    },
    {
      icon: MessageOutlined,
      text: "消息",
      number: 6,
      Color: "rgb(54,163,247)"
    },
    {
      icon: MoneyCollectOutlined,
      text: "总收入",
      number: 6,
      Color: "rgb(244,81,108)"
    },
    {
      icon: PayCircleOutlined,
      text: "总支出",
      number: 6,
      Color: "rgb(52,192,163)"
    },
  ])
  useEffect(() => {

  })
  return (
    <Wrap>
      <div className="top">
        {itemList.map((item, index) => {
          return <DisplayIcon Icon={item.icon} key={index} Color={item.Color}>
            <div style={{ textAlign: "center" }} >
              <div style={{ color: "#b4b0b0" }}>{item.text}</div>
              <div style={{ color: "#575757" }}>{item.number}</div>
            </div>
          </DisplayIcon>
        })
        }
      </div>
      <div className="my-echart"><LineEchart /></div>
      <div className="center">
        <div className="item"><RadarEchart /></div>
        <div className="item"><PieEchart /></div>
        <div className="item"><BarEchart /></div>
      </div>
      <div className="footer">
        <CommentList />
        <div className="item">12</div>
        <div className="item">45</div>
      </div>
    </Wrap>
  )
}
