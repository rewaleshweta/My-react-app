import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {SlPaperPlane} from "react-icons/sl"
import "./homebody.css"
function Homebody() {
  const [data,setData] =useState([])
  useEffect(()=>{
   fetch("https://backend-instaclone-n9fo.onrender.com/allpost")
   //fetch("https://mini-backend-insta.onrender.com/allpost")
    .then(res=>res.json())
    .then(result=> setData(result))
})
  return (
    data.map((item,index)=>{
      return(
<div className='homecard' key={index}>
      <Card style={{ width: '30rem' ,margin:"auto" ,border: "2px solid rgb(164, 161, 161)",
    borderRadius: "10px"}}>
      <Card.Title style={{margin:"5px" ,fontSize:"1.2em",fontWeight:"500"}}>{item.name}</Card.Title>
      <Card.Title  style={{margin:"5px" ,fontSize:"1.2em"}}>{item.location}</Card.Title>
      <Card.Img variant="top" height="300px" width="480px" src={item.image} />
      <Card.Body style={{height:"5rem",padding:"5px 10px"}}>
      <AiOutlineLike style={{ fontSize:"2em", margin:"0 2px" }}/>
      <SlPaperPlane style={{ fontSize:"1.6em",margin:"0 2px"  }}/>
      <Card.Text style={{fontSize:"1.3em",display:"inline",float:"right",position:"relative",bottom:"18px"}}>{`${(new Date()).getFullYear()}-${(new Date()).getMonth()}-${(new Date()).getDate()}`} </Card.Text>
        <Card.Text style={{ fontSize:"1.3em" ,fontWeight:"500",margin:"0px"}}>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      )
    })
    
  )
}

export default Homebody
