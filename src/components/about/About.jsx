import React from "react"
import Services from "../home/services/Services"
import Counter from "../home/counter/Counter"
import Partner from "../home/partner/Partner"
import { Link } from "react-router-dom"


const About = () => {
    return (
        <>

            {/* <!--Page Banner Section start--> */}
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-banner-title">About us</h1>
                            <ul className="page-breadcrumb">
                                <li><Link to="index.html">Home</Link></li>
                                <li className="active">About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Page Banner Section end--> */}


            <div className="feature-section feature-section-border-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
                <div className="container">
                    <div className="row row-25 align-items-center">

                        {/* <!--Feature Image start--> */}
                        <div className="col-lg-5 col-12 order-1 order-lg-2 mb-40">
                            <div className="feature-image">
                                <img src="assets/images/others/feature.png" alt="" /></div>
                        </div>
                        {/* <!--Feature Image end--> */}

                        <div className="col-lg-7 col-12 order-2 order-lg-1 mb-40">

                            <div className="row">
                                <div className="col">
                                    <div className="about-content">
                                        <h3>Your Dream Property Awaits  <span>The Verified Properties</span></h3>
                                        <h4 style={{ fontSize: '16px', lineHeight: '1.5' }}>
                                            Are you ready to take the first step toward owning your dream property? At The Verified Properties, we believe that buying a property is more than a transaction – it’s a gateway to a brighter future.
                                        </h4>

                                        <h3 className="pt-20" style={{ fontSize: '20px', lineHeight: '1.5' }}>Why Buy   <span>Property?</span></h3>
                                        <ul >
                                            <li className="pt-5">
                                               
                                                <h4 > <i className="pe-7s-piggy"></i> A Lifetime Investment: Real estate is one of the most secure and rewarding investments you can make.
                                                </h4>
                                            </li>
                                            <li className="pt-5">
                                              
                                                <h4>  <i className="pe-7s-science"></i> Your Own Space: No more renting. Enjoy the freedom and pride of owning a home.</h4>
                                            </li>
                                            <li className="pt-5">
                                               
                                                <h4> <i className="pe-7s-display1"></i> Financial Growth: Property values often grow over time, building wealth for you and your family.</h4>
                                            </li>
                                           
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Counter />

            <Services />


            <div class="feature-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div class="container">
                    <h3 className="title text-center pb-50">Why Buy Property?</h3>
                    <div class="feature-wrap row row-25">


                        <div class="col-lg-4 col-sm-6  col-12 mb-50">
                            <div class="feature">
                                <div class="icon"><i class="pe-7s-science"></i></div>
                                <div class="content">
                                    <h4>Tailored Options:</h4>
                                    <p>Whether you're looking for a cozy apartment, a spacious family home, or a commercial space, we have something for everyone.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-sm-6  col-12 mb-50">
                            <div class="feature">
                                <div class="icon"><i class="pe-7s-display1"></i></div>
                                <div class="content">
                                    <h4>Expert Guidance:</h4>
                                    <p> Our team of experts will guide you through every step of the buying process.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-sm-6  col-12 mb-50">
                            <div class="feature">
                                <div class="icon"><i class="pe-7s-signal"></i></div>
                                <div class="content">
                                    <h4>Affordable Solutions:</h4>
                                    <p>We work hard to find properties that match your budget and aspirations.</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>



            {/* Get Started Today! */}
            <div className="download-section section pt-100 pt-lg-80 pb-100 pt-md-70 pt-sm-60 pt-xs-50" style={{ backgroundImage: "url('assets/images/bg/download-bg.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="download-content">
                                <h1>Get Started <span>Today! </span></h1>
                                <h2 style={{ color: 'white', fontSize: '25px' }}>Don’t wait to secure your future. Browse our listings, contact our team, or schedule a visit. Your ideal property is just a click away.</h2>
                                <h1 style={{ color: 'white', fontSize: '35px' }} className="mt-3 pb-5">
                                    Let’s build your <span>future together</span>
                                </h1>

                                <div className="buttons pt-5">
                                    <Link to="/contact">
                                        <i className="fa fa-phone"></i>
                                        <span className="text">
                                            <span>Contact us</span>
                                            The Verified Properties
                                        </span>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Partner />
        </>
    )
}

export default About