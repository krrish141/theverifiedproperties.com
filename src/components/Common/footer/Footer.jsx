import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <>


            <nav className="nav">
                <Link to="/" className="nav__link">
                    <i className="pe-7s-home"></i>
                    <span className="nav__text">Home</span>
                </Link>
                <Link to="/sale_desc" className="nav__link nav__link--active">
                    <i className="pe-7s-map-marker"></i>
                    <span className="nav__text">Sell</span>
                </Link>
                <Link to="/ads" className="nav__link">
                    <i className="pe-7s-video"></i>
                    <span className="nav__text">Shorts</span>
                </Link>
                {/* <Link to="/rent" className="nav__link">
                <i className="pe-7s-key"></i>
                    <span className="nav__text">Rent</span>
                </Link> */}
                <Link to="/contact" className="nav__link">
                    <i className="pe-7s-phone"></i>
                    <span className="nav__text">Contact</span>
                </Link>
            </nav>

            <footer className="footer-section section" style={{ backgroundImage: `url(assets/images/bg/footer-bg.jpg)` }} >

                {/* <!--Footer Top start--> */}
                <div
                    className="footer-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
                    <div className="container">
                        <div className="row row-25">

                            {/* <!--Footer Widget start--> */}
                            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                                <img src="assets/images/logo-footer.png" alt="" />
                                <p>Welcome to The verified properties <br />
                                    - Your Trusted Property Partner. <br />
                                    Simplifying Property Transactions with Verified Information. </p>
                                <div className="footer-social">
                                    <Link to="https://www.facebook.com/profile.php?id=61570539578340&mibextid=ZbWKwL" className="facebook" target='_blank'><i className="fa fa-facebook"></i></Link>
                                    <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
                                    <Link to="https://www.instagram.com/the_verified_properties?igsh=MXRidm51cDFxNW5rNQ==" className='instagram' target='_blank'><i className="fa fa-instagram"></i></Link>
                                    <Link to="#" className="pinterest"><i className="fa fa-pinterest-p"></i></Link>
                                </div>
                            </div>
                            {/* <!--Footer Widget end--> */}



                            {/* <!--Footer Widget start--> */}
                            <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                <h4 className="title"><span className="text">Sell</span><span className="shape"></span></h4>
                                <ul>
                                    <li><Link to="/sale">Bungalow</Link></li>
                                    <li><Link to="/sale">Apartment</Link></li>
                                    <li><Link to="/sale">House</Link></li>
                                    <li><Link to="/sale">Land</Link></li>
                                </ul>
                            </div>
                            {/* <!--Footer Widget end--> */}

                            {/* <!--Footer Widget start--> */}
                            <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                <h4 className="title"><span className="text">Rent</span><span className="shape"></span></h4>
                                <ul>
                                    <li><Link to="/rent">Bungalow</Link></li>
                                    <li><Link to="/rent">Apartment</Link></li>
                                    <li><Link to="/rent">House</Link></li>
                                </ul>
                            </div>
                            {/* <!--Footer Widget end--> */}

                            {/* <!--Footer Widget start--> */}
                            <div className="footer-widget col-lg-2 col-md-6 col-12 mb-40">
                                <h4 className="title"><span className="text">Useful links</span><span className="shape"></span></h4>
                                <ul>
                                    <li><Link to="/">Home </Link></li>
                                    <li><Link to="/about">About </Link></li>
                                    <li><Link to="/sale">Sale </Link></li>
                                    <li><Link to="/rent">Rent </Link></li>
                                    <li><Link to="/contact">Contact </Link></li>
                                </ul>
                            </div>
                            {/* <!--Footer Widget end--> */}

                            {/* <!--Footer Widget start--> */}
                            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                                <h4 className="title"><span className="text">Contact us</span><span className="shape"></span></h4>
                                <ul>
                                    <li><i className="fa fa-map-o"></i><span>Near Arathi Petrol pump, At Arathi, Post Shriwrdhan
                                        Dist Raigad - 402110</span></li>
                                    <li><i className="fa fa-phone"></i><span><Link to="tel:+917972108208">+91 7972108208</Link></span></li>
                                    <li style={{fontSize:'13px'}}><i className="fa fa-envelope-o"></i><span><Link to="mailto:contact.theverifiedproperties@gmail.com">contact.theverifiedproperties@gmail.com</Link></span></li>
                                </ul>
                            </div>
                            {/* <!--Footer Widget end--> */}

                        </div>
                    </div>
                </div>
                {/* <!--Footer Top end--> */}

                {/* <!--Footer bottom start--> */}
                <div className="footer-bottom section">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="copyright text-start">
                                    <p>Copyright &copy;2024 <Link to="#" >Verified Propertise</Link>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="copyright text-end">
                                    <p>Website Designed & Developed by <Link to="https://technobizzar.com/" target="_blank">Technobizzar </Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Footer bottom end--> */}

             

    <a
      href="https://wa.me/7972108208"
      className="floating"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        zIndex: 999,
        bottom: "150px",
        right: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
         src="assets/images/icons/whatsapp.png"
         alt="WhatsApp"

        style={{
          backgroundColor: "#25d366",
          width: "50px",
          height: "50px",
          color: "#fff",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "35px",
          boxShadow: "2px 2px 3px #999",
          paddingTop: "1px",
        }}
      />
    </a>
  
    <a
      href="tel:+917972108208"
      className="floating"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        zIndex: 999,
        bottom: "210px",
        right: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
         src="assets/images/icons/call.png"
         alt="WhatsApp"

        style={{
          backgroundColor: "rgb(0 67 149)",
          width: "50px",
          height: "50px",
          color: "#fff",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "35px",
          boxShadow: "2px 2px 3px #999",
          paddingTop: "1px",
        }}
      />
    </a>
  


            </footer>
        </>
    )
}

export default Footer;