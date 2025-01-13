import React from "react";
import { Link } from "react-router-dom";


const Sale_Desc = () => {
    return (
        <>

            {/* <!--Page Banner Section start--> */}
            <div class="page-banner-section section">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 class="page-banner-title">Sell Property Details</h1>
                            <ul class="page-breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li class="active">Sell Property Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Page Banner Section end--> */}

            {/* <!--Agency Section start--> */}
            <div class="agency-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div class="container">

                    <div class="row row-25">

                        {/* <!--Agency Image--> */}
                        <div class="col-lg-5 col-12 mb-sm-30 mb-xs-30">
                            <div class="agency-image">
                                <img src="assets/images/verified.png" alt="" />
                            </div>
                        </div>

                        {/* <!--Agency Content--> */}
                        <div class="col-lg-7 col-12">
                            <div class="agency-content">
                                <h3 class="title">Welcome to
                                    The verified properties
                                </h3>
                                <h3 class="title" style={{ fontSize: '20px' }}>- Your Trusted Property Partner.</h3>
                                <h3 class="title" style={{ fontSize: '16px' }}>Simplifying Property Transactions with Verified Information.</h3>
                                <p>
                                    Are you planning to buy or sell a property? Ensuring a smooth and secure transaction starts with accurate documentation and thorough verification. At The Verified Properties, we specialize in providing comprehensive property document verification services to safeguard your investments and build trust.
                                </p>
                                <ul>
                                    <li><i class="pe-7s-map"></i>Near Arathi Petrol pump, At Arathi, Post Shriwrdhan
                                        Dist Raigad - 402110</li>
                                    <li><i class="pe-7s-phone"></i><a href="#">(756) 447 5744</a></li>
                                    <li><i class="pe-7s-mail-open"></i><a href="#">info@example.com</a></li>
                                    <li><i class="pe-7s-global"></i><a href="#">www.example.com</a></li>
                                </ul>
                                <div class="social">
                                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                    <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* <!--Agency Section end--> */}


            {/* <!--Services section start--> */}
            <div className="service-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
                <div className="container">

                    {/* <!--Section Title start--> */}
                    <div className="row">
                        <div className="col-md-12 mb-60 mb-xs-30">
                            <div className="section-title center">
                                <h1>Our Services</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!--Section Title end--> */}

                    <div className="row row-30 align-items-center">




                        <div className="col-lg-7 col-12">
                            <div className="row row-20">

                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-1.png" alt="" /></div>
                                                <h4>7/12 Extract (Satbara) Verification</h4>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    The Satbara document is crucial for understanding property ownership, area details, and legal standing. Our team verifies the authenticity of the document to ensure the property details match official records.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}


                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-3.png" alt="" /></div>
                                                <h4>Search Report Analysis</h4>
                                            </div>
                                            <div className="content">
                                                <p>A Search Report helps trace the property's ownership history and ensures it is free from legal disputes or encumbrances. We conduct an in-depth review to protect you from future complications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}

                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-4.png" alt="" /></div>
                                                <h4>Owner Identification Verification</h4>
                                            </div>
                                            <div className="content">
                                                <p>It’s essential to confirm the identity of the property owner before entering any transaction. We cross-check identification details with official records to ensure legitimacy and eliminate risks of fraud.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}


                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-1.png" alt="" /></div>
                                                <h4>Property Title Verification</h4>
                                            </div>
                                            <div className="content">
                                                <p>We verify the property’s title to ensure it is clear and marketable. This includes checking for mortgages, liens, or other encumbrances that may affect the sale or purchase.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}

                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-3.png" alt="" /></div>
                                                <h4>Encumbrance Certificate Validation</h4>
                                            </div>
                                            <div className="content">
                                                <p>An Encumbrance Certificate (EC) is crucial to confirm that the property is free from any financial or legal liabilities. Our experts verify this document to provide you peace of mind.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}


                                {/* <!--Service start--> */}
                                <div className="col-md-6 col-12 mb-30">
                                    <div className="service">
                                        <div className="service-inner">
                                            <div className="head">
                                                <div className="icon"><img src="assets/images/service/service-2.png" alt="" /></div>
                                                <h4>Other Document Verification Services</h4>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    We also assist with the verification of additional documents such as:
                                                    <br />
                                                    Sale Deeds
                                                    <br />
                                                    Power of Attorney
                                                    <br />
                                                    Mutation Records
                                                    <br />
                                                    Property Tax Receipts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Service end--> */}

                            </div>
                        </div>

                        <div className="col-lg-5 col-12 mb-30">
                            <div className="property-slider-2">
                                <div className="property-2">
                                    <div className="property-inner">
                                        <a href="" className="image"><img src="https://img.freepik.com/premium-photo/building-fog-pattaya-thailand_43263-59.jpg?ga=GA1.1.720044283.1719654658&semt=ais_hybrid" alt="" /></a>
                                        <div className="content">
                                            <h4 className="title"><a href="">The Verified Properties</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



            <div class="news-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div class="container">
                    <div class="row d-flex justify-content-center">

                        <div class="col-xl-9 col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">

                            <div class="single-news-item">
                                <div class="content">
                                    <h2 class="title">Why Choose Us?</h2>
                                    <ul >
                                        <li>Expertise You Can Trust: Our experienced team ensures every detail is thoroughly checked to prevent fraudulent or incomplete transactions.
                                        </li>
                                        <li>
                                            Comprehensive Support: From Satbara to title checks, we provide end-to-end property document verification services.
                                        </li>
                                        <li>
                                            Quick Turnaround Time: Get your documents verified efficiently to avoid delays in your property transaction.
                                        </li>
                                        <li>
                                            Transparency: We maintain open communication throughout the process, ensuring you are always informed.</li>
                                       
                                    </ul>
                                </div>
                            </div>

                            <hr />
                            {/* <!--Comment start--> */}
                            <div class="comment-wrap section">
                                <h3>How It Works</h3>

                                <ul class="comment-list">
                                    <li>
                                        <div class="comment">
                                            <div class="image"><img src="https://img.freepik.com/premium-photo/jakarta-city-skyline-with-urban-skyscrapers-afternoon_9083-3387.jpg?ga=GA1.1.720044283.1719654658&semt=ais_hybrid" alt="" /></div>
                                            <div class="content">
                                                <h5>1. Submit Your Documents: Share the property-related documents that need verification.</h5>
                                            </div>
                                        </div> 
                                        <br />
                                        <ul class="child-comment">
                                            <li>
                                                <div class="comment">
                                                    <div class="image"><img src="https://img.freepik.com/free-photo/city_1127-3101.jpg?ga=GA1.1.720044283.1719654658&semt=ais_hybrid" alt="" /></div>
                                                    <div class="content">
                                                        <h5>2. In-Depth Analysis: Our experts review, cross-check, and verify the authenticity of each document.</h5>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>
                                        <div class="comment">
                                            <div class="image"><img src="https://img.freepik.com/premium-photo/modern-house-garden_251764-379.jpg?ga=GA1.1.720044283.1719654658&semt=ais_hybrid" alt="" /></div>
                                            <div class="content">
                                                <h5> 3. Detailed Report: Receive a comprehensive verification report with clear insights into the property’s legal and ownership status.</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <br />
                                    <ul class="child-comment">
                                        <li>
                                            <div class="comment">
                                                <div class="image"><img src="https://img.freepik.com/premium-photo/modern-building-skyscrapers-view-with-dome-protection-city_9083-6291.jpg?ga=GA1.1.720044283.1719654658&semt=ais_hybrid" alt="" /></div>
                                                <div class="content">
                                                    <h5> 4. Peace of Mind: Proceed with your transaction confidently, knowing every document has been verified.
                                                    </h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </ul>

                            </div>
                            {/* <!--Comment end--> */}

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Sale_Desc