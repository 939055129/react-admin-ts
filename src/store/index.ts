/*
 * @Description: Night
 * @Date: 2021-02-19 18:29:23
 * @LastEditTime: 2021-02-20 11:30:58
 * @Version: 
 */
import { createStoreHook } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducer"
const store = createStore(reducer)
export default store