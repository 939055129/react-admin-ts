/*
 * @Description: Night
 * @Date: 2021-02-26 18:10:53
 * @LastEditTime: 2021-02-26 18:11:26
 * @Version: 
 */
import styled from "styled-components"
const Wrap = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
.top{
  display:flex;
}
.my-echart{
  margin:10px;
  border-radius:10px
}
.center{
 display:flex;
  margin:10px;
  .item{
    width:0;
    flex:1;
    margin:10px;
}
}
`
export default Wrap