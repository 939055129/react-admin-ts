import { Component, FC, ReactChild } from "react"
import styled from "styled-components"

/*
 * @Description: Night
 * @Date: 2021-02-25 17:46:25
 * @LastEditTime: 2021-02-25 18:33:03
 * @Version: 
 */
const Wrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:10px;
padding:15px 10px;
width:100%;
background-color:white;
border-radius:5px;
box-shadow:0px 5px 2px #dbdbdb;
cursor:pointer;
`
export default function DisplayIcon(props: { Icon: ReactChild, text: ReactChild, number: number | ReactChild }) {
  const { Icon, text, number } = props
  return (
    <Wrap>
      {Icon}
      <span style={{textAlign:"center"}}>
        {text}
        {number}
      </span>
    </Wrap>
  )
}