import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>About us</h2>
                  <ul>
                    <li>
                    <img src="https://secureservercdn.net/160.153.138.94/x9a.171.myftpupload.com/wp-content/uploads/2021/03/cropped-ymc-logo-1.png"  height="90px" width="90px"></img>
                    </li>
                  </ul>
                </div>

                
                <div className="col-15 col-lg-3">
                  <h2>Yusuf Meherally center</h2>
                  <ul type="disc">
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Returns and Refund Policies</a>
                    </li>
                   

                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Get in touch with us</h2>
                  <ul type="disc">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">9321459293</a>
                    </li>
                   

                  </ul>
                </div>



                

                <div>
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <i class="fab fa-facebook"></i> 
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Yusuf Meherally Centre. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
