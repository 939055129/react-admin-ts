/*
 * @Description: Night
 * @Date: 2021-02-25 13:47:25
 * @LastEditTime: 2021-02-26 16:18:28
 * @Version: 
 */
import React from 'react'
import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';

const FancyRoute = (props: any) => {
  nprogress.start()
  // React.useState(nprogress.start());
  React.useEffect((): any => {
    nprogress.done();
    // return () => nprogress.start();
  });
  return (
    <Route {...props} />
  );
};
export default FancyRoute