/*
 * @Description: Night
 * @Date: 2021-02-02 15:27:28
 * @LastEditTime: 2021-03-15 18:15:34
 * @FilePath: \app\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./store/index"
import mockStart from "mock/index"
if (process.env.NODE_ENV === "development") {
  mockStart()
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
