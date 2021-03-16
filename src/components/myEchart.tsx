/*
 * @Description: Night
 * @Date: 2021-03-12 09:57:19
 * @LastEditTime: 2021-03-16 17:07:23
 * @Version: 
 */
import { useEffect, memo } from 'react';
import * as echarts from "echarts"
function MyEchart(props: { id: string, options: {} }) {
  const { id, options } = props
  function debounce(fn: any, delay: number) {
    let timer: any = null
    return function (...args: any) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(fn(args), delay)
    }
  }
  useEffect(() => {
    let myChart = echarts.getInstanceByDom(document.getElementById(id) as HTMLElement)
    if (!myChart) {
      myChart = echarts.init(document.getElementById(id) as HTMLElement)
    }
    myChart.setOption(options)
    const init = debounce(() => { myChart.resize() }, 200)
    window.addEventListener("resize", init)
    return () => {
      window.removeEventListener("resize", init)
    }
  }, [id, options])
  return (
    <div id={id} style={{ width: '100%', height: '100%' }}></div>
  )
}
export default memo(MyEchart)