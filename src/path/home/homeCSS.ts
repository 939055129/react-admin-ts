/*
 * @Description: Night
 * @Date: 2021-02-26 18:10:53
 * @LastEditTime: 2021-03-12 16:59:43
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
  border-radius:10px;
  height:400px;
}
.center{
 display:flex;
 height:280px;
 margin:10px;
  .item{
    width:0;
    flex:1;
   margin-right:10px;
    height:100%
}
&:last-child(){
  margin-right:0px;
}
}
.footer{
  margin-top:10px;
  margin-left:10px;
  display:flex;
  justify-content:space-between;
  .item{
    background:white;
    margin-right:10px;
    margin-bottom:20px;
    width:0;
    flex:1
  }
}
`
export default Wrap