import React from "react";
import {Link} from 'react-router-dom';


const Properties_detail = () => {
    return (
        <>


          {/* <!--Page Banner Section start--> */}
    <div class="page-banner-section section" style={{backgroundImage: 'url(assets/images/bg/single-property-bg.jpg'}}>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="page-banner-title">Properties</h1>
                    <ul class="page-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active">Friuli-Venezia Giulia</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!--Page Banner Section end--> */}

    {/* <!--New property section start--> */}
    <div class="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row">
            
                <div class="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
                    <div class="row">

                        {/* <!--Property start--> */}
                        <div class="single-property col-12 mb-50">
                            <div class="property-inner">
                               
                                <div class="head">
                                    <div class="left">
                                        <h1 class="title">Friuli-Venezia Giulia</h1>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt="" />568 E 1st Ave, Miami</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$550<span>Month</span></span>
                                            <span class="type">For Rent</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="image mb-30">
                                    <div class="single-property-gallery">
                                        <div class="item"><img src="assets/images/property/single-property-1.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-2.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-3.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-4.jpg" alt="" /></div>
                                    </div>
                                    <div class="single-property-thumb">
                                        <div class="item"><img src="assets/images/property/single-property-1-thumb.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-2-thumb.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-3-thumb.jpg" alt="" /></div>
                                        <div class="item"><img src="assets/images/property/single-property-4-thumb.jpg" alt="" /></div>
                                    </div>
                                </div>
                                
                                <div class="content">
                                    
                                    <h3>Description</h3>
                                    
                                    <p>The Verified properties -Buy And Sale Properties dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quipx ea codo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo.</p>
                                    <p>The Verified properties -Buy And Sale Properties should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lore gna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacm emod tempor nt ut labore lore magna iqua. Ut enim ad minim veniamco laboris nisi ut aliqu.</p>
                                    <p>The Verified properties -Buy And Sale Properties should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lore gna iqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    
                                    <div class="row mt-30 mb-30">
                                        
                                        <div class="col-md-5 col-12 mb-xs-30">
                                            <h3>Condition</h3>
                                            <ul class="feature-list">
                                                <li><div class="image"><img src="assets/images/icons/area.png" alt="" /></div>Area 550 sqft</li>
                                                <li><div class="image"><img src="assets/images/icons/bed.png" alt="" /></div>Bedroom 6</li>
                                                <li><div class="image"><img src="assets/images/icons/bath.png" alt="" /></div>Bathroom 4</li>
                                                <li><div class="image"><img src="assets/images/icons/parking.png" alt="" /></div>Garage 2</li>
                                                <li><div class="image"><img src="assets/images/icons/kitchen.png" alt="" /></div>Kitchen 2</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="col-md-7 col-12">
                                            <h3>Amenities</h3>
                                            <ul class="amenities-list">
                                                <li>Air Conditioning</li>
                                                <li>Bedding</li>
                                                <li>Balcony</li>
                                                <li>Cable TV</li>
                                                <li>Internet</li>
                                                <li>Parking</li>
                                                <li>Lift</li>
                                                <li>Pool</li>
                                                <li>Dishwasher</li>
                                                <li>Toaster</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-12 mb-30">
                                            <h3>Video</h3>
                                            <div class="embed-responsive ratio ratio-16x9">
                                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8CbvItGX7Vk"></iframe>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}
                        
                        {/* <!--Comment start--> */}
                        <div class="comment-wrap col-12">
                            <h3>3 Feedback</h3>


                            <h3>Leave a Feedback</h3>

                            <div class="comment-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-md-6 col-12 mb-30"><input type="text" placeholder="Name" /></div>
                                        <div class="col-md-6 col-12 mb-30"><input type="email" placeholder="Email" /></div>
                                        <div class="col-12 mb-30"><textarea placeholder="Message"></textarea></div>
                                        <div class="col-12"><button class="btn">send now</button></div>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                        {/* <!--Comment end--> */}

                    </div>
                </div>
                
                <div class="col-lg-4 col-12 order-2 pl-30 pl-sm-15 pl-xs-15">
                    
                    
                    
                    {/* <!--Sidebar start--> */}
                    <div class="sidebar">
                        <h4 class="sidebar-title"><span class="text">Feature Property</span><span class="shape"></span></h4>
                        
                        {/* <!--Sidebar Property start--> */}
                        <div class="sidebar-property-list">
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Rent</span>
                                    <a href=""><img src="assets/images/property/sidebar-property-1.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="">Friuli-Venezia Giulia</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt="" />568 E 1st Ave, Miami</span>
                                    <span class="price">$550 <span>Month</span></span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Sale</span>
                                    <a href=""><img src="assets/images/property/sidebar-property-2.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="">Marvel de Villa</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt="" />450 E 1st Ave, New Jersey</span>
                                    <span class="price">$2550</span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Rent</span>
                                    <a href=""><img src="assets/images/property/sidebar-property-3.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="">Ruposi Bangla Cottage</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt="" />215 L AH Rod, California</span>
                                    <span class="price">$550 <span>Month</span></span>
                                </div>
                            </div>
                            
                        </div>
                        {/* <!--Sidebar Property end--> */}
                        
                    </div>
                  
            
                </div>
                
            </div>
        </div>
    </div>
    {/* <!--New property section end--> */}
        </>
    )
}
export default Properties_detail