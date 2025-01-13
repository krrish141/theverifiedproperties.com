import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [showMoreText, setShowMoreText] = useState(false);

    const handleReadMore = () => {
        setShowMoreText(true);
    };

    return (
        <>
            {/* <!--Page Banner Section start--> */}
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-banner-title">Contact us</h1>
                            <ul className="page-breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Page Banner Section end--> */}

            {/* <!--New property section start--> */}
            <div className="contact-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
                <div className="container">
                    <div className="row">

                        <div className="col-12 mb-50">
                            <div className="embed-responsive embed-responsive-21by9">
                                <div id="contact-map" className="embed-responsive-item contact-map" data-lat="40.730610" data-Long="-73.935242"></div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row">

                                <div className="contact-info col-md-4 col-12 mb-30">
                                    <i className="pe-7s-map"></i>
                                    <h4>address</h4>
                                    <p>Near Arathi Petrol pump, At Arathi, Post Shriwrdhan
                                        Dist Raigad - 402110</p>
                                </div>

                                <div className="contact-info col-md-4 col-12 mb-30">
                                    <i className="pe-7s-phone"></i>
                                    <h4>Phone</h4>
                                    <p><Link to="#">+012 345 678 101</Link><Link to="#">+012 345 678 102</Link></p>
                                </div>

                                <div className="contact-info col-md-4 col-12 mb-30">
                                    <i className="pe-7s-global"></i>
                                    <h4>Website</h4>
                                    <p><Link to="mailto:contact.theverifiedproperties@gmail.com">contact.theverifiedproperties@gmail.com</Link></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!--New property section end--> */}

            {/* <!--New property section start--> */}
            <div className="contact-section section bg-gray pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div className="container">

                    {/* <!--Section Title start--> */}
                    <div className="row">
                        <div className="col-md-12 mb-60 mb-xs-30">
                            <div className="section-title center">
                                <h1>Leave a Message</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!--Section Title end--> */}

                    <div className="row">

                        <div className="contact-form-wrap col-12">
                            <div className="contact-form">
                                <form id="contact-form" action="assets/php/mail.php">
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-30"><input name="name" type="text" placeholder="Name" /></div>
                                        <div className="col-md-6 col-12 mb-30"><input name="email" type="email" placeholder="Email" /></div>
                                        <div className="col-md-6 col-12 mb-30"><input name="phone" type="text" placeholder="Phone" /></div>
                                        <div className="col-md-6 col-12 mb-30"><input name="subject" type="text" placeholder="Subject" /></div>
                                        <div className="col-12 mb-30"><textarea name="message" placeholder="Message"></textarea></div>
                                        <div className="col-12 text-center"><button className="btn">submit</button></div>
                                    </div>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!--New property section end--> */}

            {/* Guidelines Section */}
            <div className="guidelines-section section pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Guidelines for Website Users to Prevent Illegal Activities</h2>
                            <p>These detailed guidelines are tailored for property buyers, agents, and property owners to ensure a safe and transparent experience on our platform.</p>

                            <h4 style={{ marginTop: '15px', marginBottom: '15px', fontWeight: '600', fontSize: '22px' }}>Guidelines for Property Buyers</h4>
                            <ul>
                                <li><b>Verify Listings and Agents:</b> Only interact with verified agents or property owners listed on the website. Cross-check property details and request essential legal documents such as title deeds and permits.</li>
                                <li><b>Beware of Fraudulent Activities:</b> Avoid sharing personal information, like bank details, with unverified parties. Never make payments directly to agents or property owners outside the platform.</li>
                                <li><b>Secure Financial Transactions:</b> Use secure and traceable payment methods recommended by the website. Avoid cash transactions to ensure proper accountability.</li>
                                <li><b>Report Suspicious Activities:</b> Report any suspicious or fraudulent behavior by agents or sellers to the platform immediately.</li>
                                <li><b>Consult Professionals:</b> Engage legal and financial advisors to verify property details and agreements before making commitments.</li>
                            </ul>

                            {!showMoreText ? (
                                <button
                                    style={{
                                        background: '#004395',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginTop: '10px'
                                    }}
                                    onClick={handleReadMore}
                                >
                                    Read More
                                </button>
                            ) : (
                                <>
                                    <h4 style={{ marginTop: '15px', marginBottom: '15px', fontWeight: '600', fontSize: '22px' }}>Guidelines for Agents</h4>
                                    <ul>
                                        <li><b>Professional Conduct:</b> Register on the platform with verified credentials, such as government-issued real estate licenses or certifications. Provide accurate and truthful property details without exaggeration.</li>
                                        <li><b>Transparency with Buyers and Owners:</b> Clearly disclose all terms, fees, and conditions to clients. Avoid concealing property flaws or any legal issues.</li>
                                        <li><b>No Misuse of the Platform:</b> Do not approach clients directly outside the website or attempt to bypass the platform to close deals. Violators will face account suspension and possible legal action.</li>
                                        <li><b>Respect Platform Policies:</b> Use the website’s tools for communication, listings, and transactions. Maintain professionalism in all interactions with buyers and property owners.</li>
                                    </ul>
                                    <h4 style={{ marginTop: '15px', marginBottom: '15px', fontWeight: '600', fontSize: '22px' }}>Guidelines for Property Owners</h4>
                                    <ul>
                                        <li><b>Provide Authentic Information:</b> Upload accurate property descriptions, documents, and photos to ensure transparency. Misleading information may lead to listing suspension.</li>
                                        <li><b>Verify Agents and Buyers:</b> Ensure agents or buyers contacting you are verified through the platform. Do not share personal contact information until verification is complete.</li>
                                        <li><b>Secure Communication and Transactions:</b> Use the platform’s communication channels to discuss terms. Finalize financial agreements through secure and recommended payment systems.</li>
                                        <li><b>No Direct Client Approaches:</b> Avoid negotiating directly with clients outside the platform to maintain fairness and trust.</li>
                                    </ul>
                                    <h4 style={{ marginTop: '15px', marginBottom: '15px', fontWeight: '600', fontSize: '22px' }}>General Website Policies for All Users</h4>
                                    <ul>
                                        <li><b>User Verification:</b> All users (buyers, agents, and owners) must complete identity verification before accessing full platform features.</li>
                                        <li><b>Strict Ban on Illegal Activities:</b> Fraudulent activities, including fake listings, false credentials, or attempts to bypass platform rules, will result in account termination and potential legal action.</li>
                                        <li><b>Transparent Communication:</b> Use only the platform’s messaging tools for communication to ensure safety and avoid misunderstandings.</li>
                                        <li><b>Reporting Misconduct:</b> A dedicated "Report Misuse" option is available for users to report any suspicious activities.</li>
                                        <li><b>Secure Payments Policy:</b> Users are encouraged to use escrow services or payment gateways endorsed by the platform for secure financial transactions.</li>
                                    </ul>
                                    <p>By adhering to these guidelines, users can help create a safe and reliable environment for all participants in real estate transactions.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
