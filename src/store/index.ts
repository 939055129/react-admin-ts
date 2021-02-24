/*
 * @Description: Night
 * @Date: 2021-02-19 18:29:23
 * @LastEditTime: 2021-02-24 11:31:03
 * @Version: 
 */
import { createStore } from "redux"
import reducer from "./reducer"
const store = createStore(reducer)
export default store