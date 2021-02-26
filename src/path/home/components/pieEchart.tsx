/*
 * @Description: Night
 * @Date: 2021-02-26 18:00:40
 * @LastEditTime: 2021-02-26 18:18:55
 * @Version: 
 */
import ReactECharts from 'echarts-for-react';
export default function BarEchart() {
  const option = {
    backgroundColor: "#fff",

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#3aa5d6'
      }
    },

    tooltip: {
      trigger: 'item'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 274, name: '联盟广告' },
          { value: 235, name: '视频广告' },
          { value: 400, name: '搜索引擎' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          color: ['rgb(59, 179, 235 )','rgb(59, 129, 235 )','rgb(19, 129, 135 )']
        },
        labelLine: {
          lineStyle: {
            color: 'rgb(58, 136, 238)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,

        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function () {
          return Math.random() * 200;
        }
      }
    ]
  };
  return (
    <ReactECharts option={option} />
  )
}