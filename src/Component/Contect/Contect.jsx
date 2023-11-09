import React from 'react'

let input=document.querySelector(".uName")
let nameInput=document.querySelector(".nameInput")
export default function Contect() {

  
  
  return <>
  <div className="contect m-0 vh-100 ">
<div className="content-head position-relative text-center fw-bold">
<h2 className='h1 '>CONATCT SECTION</h2>
<div className="starContect-ico position-relative mx-auto">
<i className="fa-solid fa-star my-3"></i>
</div>
</div>
<div className="d-flex flex-column contect-content justify-content-center align-items-start mx-auto w-50">
<div className="form form-floating d-flex flex-column  w-100 justify-content-center align-items-center">
 
<div className="form-floating  mb-3 w-100">
  <input type="text" className="form-control border-0 border-bottom  w-100" id="floatingInput" placeholder="userName"/>
  <label htmlFor="floatingInput">userName :</label>
</div>
<div className="form-floating  mb-3 w-100">
  <input type="text" class="form-control border-0 border-bottom  w-100" id="floatingInput" placeholder="userAge"/>
  <label for="floatingInput">userAge :</label>
</div>
<div class="form-floating  mb-3 w-100">
  <input type="email" className="form-control border-0 border-bottom  w-100" id="floatingInput" placeholder="userEmail"/>
  <label htmlFor="floatingInput">userEmail :</label>
</div>
<div className="form-floating  mb-3 w-100">
  <input type="password" className="form-control border-0 border-bottom  w-100" id="floatingInput" placeholder="userPassword"/>
  <label htmlFor="floatingInput">userPassword :</label>
</div>

</div>
<button className='btn btn-green text-white'>Send Masseg</button>
</div>
  
  </div>
  </>
}
