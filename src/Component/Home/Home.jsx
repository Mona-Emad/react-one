import React from 'react'

import imgHome from '../../images/workstudy-lp-img.webp'

export default function Home() {
  return <>
  <div className="home  ">
  <div className="container ">
    <div className="content d-flex vh-100 flex-column text-white justify-content-center align-items-center">
        <img src={imgHome} className='w-25 rounded-circle' alt="" />
        <h1 className='my-3 '>START FRAMEWORK</h1>
        <div className="star-ico">
        <i class="fa-solid  fa-star mb-3"></i>
        </div>
        <h6>Graphic Artist - Web Designer - Illustrator</h6>
    </div>
  </div>
  </div>
  
  </>
}
