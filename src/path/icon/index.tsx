/*
 * @Description: Night
 * @Date: 2021-02-03 16:34:07
 * @LastEditTime: 2021-03-01 17:39:45
 * @Version: 
 */

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
