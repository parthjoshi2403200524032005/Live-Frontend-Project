import React from 'react';


export default function Footer2() {
  return (

    <>
     <style>
        {`
          .Footer {
            padding: 2rem 0;
            margin-top: 8rem;
            background-color:#133682;
            color:white;
            height:50vh;
          }
          
          .ft-1 h3 {
            font-weight: 700;
            font-family: cursive;
            letter-spacing: 2px;
            padding: 0.5rem 0;
          }
          
          .ft-1 span {
            color: #f60838;
          }
          
          .ft-1 p {
            padding: 0rem 5rem 0.8rem 0;
            font-weight: 500;
          }
          
          .footer-icons i {
            padding: 0.4rem 0.5rem;
            background: #e1e1e1;
            color: #f60838;
            margin: 0 0.5rem;
            border-radius: 50%;
          }
          
          .footer-icons i:hover {
            background: #f60838;
            color: #fff;
            transition: 0.6s;
            cursor: pointer;
          }
          
          .Footer h5 {
            color: white;
            font-weight:600;
          }
          
          .ft-2 ul {
            list-style: none;
            padding-left: 0;
          }
          
          .ft-2 ul li {
            padding: 0.35rem 0;
            font-weight: 500;
          }
          
          .ft-2 ul a {
            text-decoration: none;
            color: white;
            font-size: 1.06rem;
          }
          
          .ft-3 p {
            font-weight: 500;
            padding: 0.1rem 0;
            font-size: 1.06rem;
          }
          
          .ft-3 i {
            padding-right: 0.5rem;
          }

    

    
          
       
        `}
      </style>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        
                        
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Services</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Find A Doctor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Plans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Add Your Hospital/Clinic</a>
                                </li>
    
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Refund Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Terms Of Use</a>
                                </li>
                              
                            </ul>
                        </div>



                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                          <h3>Health<span>Mudraa</span></h3>
                            <h3>Contact Us</h3>
                            <p>#2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}