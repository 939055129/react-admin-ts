/*
 * @Description: Night
 * @Date: 2021-02-19 18:29:23
 * @LastEditTime: 2021-03-16 10:44:54
 * @Version: 
 */
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer"
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export default store