import React from 'react'
export default function Footer() {
  return <>
  <footer className=" text-white vw-100 text-center pt-5">
    <div className="container">
      <div className="row m-0">
        <div className="col-md-4">
          <div className="inner text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner text-center">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center align-items-center my-3 gap-4">
              <div className="footer-icon d-flex justify-content-center align-items-center my-3 rounded-circle ">
              <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="footer-icon d-flex justify-content-center align-items-center my-3 rounded-circle ">
              <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="footer-icon d-flex justify-content-center align-items-center my-3 rounded-circle ">
              <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="footer-icon d-flex justify-content-center align-items-center my-3 rounded-circle ">
              <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>
        
        
        
      </div>
    </div>
      <div className="footer-end bg-dark text-center text-white vw-100 py-3">
      <h6>Copyright © Your Website 2021</h6>
      </div>
  </footer>
  </>
}
