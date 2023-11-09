import React from 'react'
import imgPrtfOne from "../../images/poert1.png"
import imgPrtfTwo from "../../images/port2.png"
import imgPrtfThree from "../../images/port3.png"

import {useEffect, useState } from 'react'



export default function Porfolio() {
  let [imgs,useImgs]=useState()
  let [imgSurc,setImgSurc]=useState()
  // let [continerImage,useContinerImage]=useState()
  let continerImage=document.querySelector(".conteir-img")
  let body=document.querySelector('body')
 function getSurc(e)
 {
  useImgs=(document.querySelector("img"))
  setImgSurc(e.target.previousElementSibling.getAttribute('src'))
  
  
  // useContinerImage(document.querySelector(".conteir-img"))

  continerImage.classList.replace("d-none","d-flex")
  // scroll(0,0)
  // body.style.overflow="hidden"
  console.log(body);
 }
 function hiddenContinerImg(e)
 {
  
  if(e.target.dataset.name==="hidden")
  {
    continerImage.classList.replace("d-flex","d-none")
    body.style.overflow="auto"
    
  }
 }
  


 
  return <>
  <div className="portfolio position-relative ">
    <div className="container">
<div className="content-head position-relative text-center fw-bold">
<h2 className='h1 '>PORTFOLIO COMPONENT</h2>
<div className="starContect-ico position-relative mx-auto">
<i className="fa-solid fa-star my-3 "></i>
</div>
</div>
<div className="portfol_gallary my-5">
<div className="row g-4">
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfOne} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center"onClick={(e)=>
      {getSurc(e)}}>
      <i className="fa-solid fa-plus text-white fa-10x" ></i>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfTwo} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center"onClick={(e)=>
      {getSurc(e)}}>
      <i className="fa-solid fa-plus text-white fa-10x " ></i>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfThree} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center"  onClick={(e)=>
      {getSurc(e)}}>
      <i className="fa-solid fa-plus text-white fa-10x" ></i>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfOne} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center"onClick={(e)=>
      {getSurc(e)}} >
      <i className="fa-solid fa-plus text-white fa-10x"></i>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfTwo} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded  w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center" onClick={(e)=>
      {getSurc(e)}}>
      <i className="fa-solid fa-plus text-white fa-10x" ></i>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="imge-inner position-relative">
      <img src={imgPrtfThree} className='w-100 rounded' alt="" />
      <div className="imag-laer rounded w-100 top-0 bottom-0 position-absolute d-flex justify-content-center align-items-center"onClick={(e)=>
      {getSurc(e)}}>
      <i className="fa-solid fa-plus text-white fa-10x" ></i>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="conteir-img  z-3 mt-4 d-none bg-info w-100 top-0 bottom-0 position-absolute bg-opacity-25 justify-content-center align-items-center po"
  onClick={(e)=>{
    hiddenContinerImg(e)
  }} data-name="hidden">
  <img src={imgSurc} className='w-50' alt="" />

  </div>
  </div>
  
  
  </>
}
