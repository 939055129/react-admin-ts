/*
 * @Description: Night
 * @Date: 2021-02-03 16:34:07
 * @LastEditTime: 2021-02-26 16:14:27
 * @Version: 
 */

import { FC, useEffect } from 'react'
import Wrap from './components/wrap'
const Page = (props: any) => {
  const { name, age } = props
  return (
    < div > {name}{age}</div>
  )
}


export default function Icon(props: any) {
  // return <Wrap Page={Page} />

  return (
    <div>
      <Wrap name="liuhonyu" age="132" Comp={Page}></Wrap>
      <Page name="465" />
    </div>

  )

}
