import React from 'react'
import "./postform.css"
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Postform() {
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [location ,setLocation]=useState("")
  const [description,setDescreption]=useState("")
  const [image,setImage]=useState("")
  const [url,setUrl]=useState("")
  const [toggle,setToggle]=useState()
  const [toggle2,setToggle2]=useState()
  
  
 

  useEffect(()=>{
    console.log(url)
    if(url){
      //fetch("https://backend-instaclone-n9fo.onrender.com/addpost",{
        fetch("https://mini-backend-insta.onrender.com/addpost",{
        method:"Post",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
        name,
        location,
        description,
        image:url
        })
      })
      .then(res=>
        res.json())
        .then(res=>
          // console.log(res)
          {
          alert("post added successfully")
          navigate("/allpost")
          }
        )
        .catch(err=>{
          console.log(err)
        })
    }
    
  },[url])
 const postimage=()=>{
  if(!name || !location ||!description || !image){
   return setToggle(true)
  }
  setToggle(false)
  setToggle2(true)

  const data=new FormData()
  data.append("file",image)
  data.append("upload_preset","shwetamaske")
  data.append("cloude_name","dyprajsll")
  //render=  https://backend-instaclone-n9fo.onrender.com/addpost
  //https://api.cloudinary.com/v1_1/dyprajsll/image/upload
  fetch("https://api.cloudinary.com/v1_1/dyprajsll/image/upload",{
    method:"Post",
    body:data
  })
  .then(res=>
    res.json()
  )
  .then((result)=>
    {
      // console.log(res)
      setUrl(result.url)
    })
  
 }

  return (
    <div className='postdetails'>
     
      <div className='imageselect'>
      <input  type="file" onChange={(e)=>{
       setImage(e.target.files[0])
      }} />
      </div>
      <div className='author'>
      <input placeholder='Author' type="text" onChange={(e)=>{
       setName(e.target.value)
      }}/>
      </div>
      <div className='location'>
      <input placeholder='location' type="text" onChange={(e)=>{
       setLocation(e.target.value)
      }} />
      </div>
      <div className='descreption'>
      <input placeholder='Description' type="text" onChange={(e)=>{
       setDescreption(e.target.value)
      }} />
      </div>
      <div className='postbtn'>
    <Button variant="primary" className='upload' onClick={()=>{
     
        postimage()

      }} >
        POST
      </Button>
      </div>
     {toggle &&  <h1 className='loader'>Plzz Enter All Details..</h1>}
     {toggle2 &&  <h1 className='loader2'>Uploading- Plzz wait..</h1>}
     
    </div>
  )
}

export default Postform
