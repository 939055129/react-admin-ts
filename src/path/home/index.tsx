/*
 * @Description: Night
 * @Date: 2021-02-02 16:06:57
 * @LastEditTime: 2021-02-25 18:35:23
 * @Version: 
 */

// import { useLocation } from 'react-router-dom'
// import { decodeurl } from "@/utils/uitls"

import styled from "styled-components"
import ReactECharts from 'echarts-for-react';
import DisplayIcon from "./components/displayIcon"
import {
  HomeOutlined,
  MessageOutlined ,
  MoneyCollectOutlined,
  PayCircleOutlined ,
} from '@ant-design/icons';
const Wrap = styled.div`
width:100%;
height:100%;

display:flex;
flex-direction:column;
.top{
  display:flex;

}
`
const text = (text: string, color: string = "#b1b1b1") => {
  return (<div style={{ color: color }}>{text}</div>)
}
const number = (text: number | string, color: string = "#616161") => {
  return (<div style={{ color: color }}>{text}</div>)
}
export default function Home() {
  const option = {
    title: {
      text: '未来一周气温变化',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['最高气温', '最低气温']
    },
    toolbox: {
      show: true,
      feature: {
        magicType: { type: ['line', 'bar'] }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: '最高气温',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      },
      {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [
            { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' },
            [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: '最大值'
              },
              type: 'max',
              name: '最高点'
            }]
          ]
        }
      }
    ]
  };
  return (
    <Wrap>
      <div className="top">
        <DisplayIcon number={number(4654)} text={text("访问人数",)} Icon={<HomeOutlined style={{ fontSize: 26 }} />} />
        <DisplayIcon number={number(4654)} text={text("消息")} Icon={<MessageOutlined style={{ fontSize: 26 }} />} />
        <DisplayIcon number={number(4654)} text={text("总收入")} Icon={<MoneyCollectOutlined style={{ fontSize: 26 }} />} />
        <DisplayIcon number={number(4654)} text={text("总支出")} Icon={<PayCircleOutlined style={{ fontSize: 26 }} />} />
      </div>
      <ReactECharts option={option}></ReactECharts>
      <div></div>
      <div></div>
    </Wrap>
  )
}
