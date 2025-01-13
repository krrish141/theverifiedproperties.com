import React from "react";
import {Link} from "react-router-dom";


const Sale = () => {
    return(
        <>

            {/*banner  */}
            <div class="page-banner-section section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="page-banner-title">Sale Properties</h1>
                    <ul class="page-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active">Sale Properties</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        {/*banner  */}

          <div class="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
            <div class="container">
            <div class="row">
            
                <div class="col-lg-8 col-12 order-1 mb-sm-50 mb-xs-50">
                    <div class="row">

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <a href="/properties_detail"><img src="assets/images/property/property-1.jpg" alt=""/></a>
                                    <ul class="property-feature">
                                        <li>
                                            <span class="area"><img src="assets/images/icons/area.png" alt=""/>550 SqFt</span>
                                        </li>
                                        <li>
                                            <span class="bed"><img src="assets/images/icons/bed.png" alt=""/>6</span>
                                        </li>
                                        <li>
                                            <span class="bath"><img src="assets/images/icons/bath.png" alt=""/>4</span>
                                        </li>
                                        <li>
                                            <span class="parking"><img src="assets/images/icons/parking.png" alt=""/>3</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div class="left">
                                        <h3 class="title"><a href="/properties_detail">Friuli-Venezia Giulia</a></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>568 E 1st Ave, Miami</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$550<span>M</span></span>
                                            <span class="type">For Rent</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>Friuli-Venezia Giflia is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <a href="/properties_detail" class="read-more">View Property</a>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}
                        
                    </div>

                    <div class="row mt-20">
                        <div class="col">
                            <ul class="page-pagination">
                                <li><a href="/properties_detail"><i class="fa fa-angle-left"></i> Prev</a></li>
                                <li class="active"><a href="/properties_detail">01</a></li>
                                <li><a href="/properties_detail">02</a></li>
                                <li><a href="/properties_detail">03</a></li>
                                <li><a href="/properties_detail">04</a></li>
                                <li><a href="/properties_detail">05</a></li>
                                <li><a href="/properties_detail"><i class="fa fa-angle-right"></i> Next</a></li>
                            </ul>
                        </div>
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
                                    <a href="/properties_detail"><img src="assets/images/property/sidebar-property-1.jpg" alt=""/></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="/properties_detail">Friuli-Venezia Giulia</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt=""/>568 E 1st Ave, Miami</span>
                                    <span class="price">$550 <span>Month</span></span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Sale</span>
                                    <a href="/properties_detail"><img src="assets/images/property/sidebar-property-2.jpg" alt=""/></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="/properties_detail">Marvel de Villa</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt=""/>450 E 1st Ave, New Jersey</span>
                                    <span class="price">$2550</span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Rent</span>
                                    <a href="/properties_detail"><img src="assets/images/property/sidebar-property-3.jpg" alt=""/></a>
                                </div>
                                <div class="content">
                                    <h5 class="title"><a href="/properties_detail">Ruposi Bangla Cottage</a></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt=""/>215 L AH Rod, California</span>
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

        </>
    )
}

export default Sale