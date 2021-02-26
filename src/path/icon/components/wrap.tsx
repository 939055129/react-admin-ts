
import { FC, useEffect } from 'react';

/*
 * @Description: Night
 * @Date: 2021-02-26 11:53:59
 * @LastEditTime: 2021-02-26 16:21:46
 * @Version: 
 */
export default function Wrap(props: { Comp: FC, [props: string]: any }) {
  const { Comp, ...restProps } = props
  useEffect(() => {
    console.log(456)
  })
  return (
    <div><Comp {...restProps} /></div>
  )

}