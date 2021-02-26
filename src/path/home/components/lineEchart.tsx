/*
 * @Description: Night
 * @Date: 2021-02-26 18:00:40
 * @LastEditTime: 2021-02-26 18:03:25
 * @Version: 
 */
import ReactECharts from 'echarts-for-react';
export default function BarEchart() {
  const option = {
    backgroundColor: "#fff",
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
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["#bad3d2", "rgba(64,201,198,0.5)"]
        }
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
    <ReactECharts option={option} />
  )
}