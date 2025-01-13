import React from "react";
import {Link} from 'react-router-dom';

const Rent = () => {
    return(
        <>


            {/*banner  */}
            <div class="page-banner-section section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="page-banner-title">Rent Properties</h1>
                    <ul class="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">Rent Properties</li>
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
                                    <Link to="/properties_detail"><img src="assets/images/property/property-1.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">Friuli-Venezia Giulia</Link></h3>
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
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <span class="label">Feature</span>
                                    <Link to="/properties_detail"><img src="assets/images/property/property-2.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">Marvel de Villa</Link></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>450 E 1st Ave, New Jersey</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$2550</span>
                                            <span class="type">For Sale</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>Marvel de Villa is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <span class="label">popular</span>
                                    <Link to="/properties_detail"><img src="assets/images/property/property-3.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">Ruposi Bangla Cottage</Link></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>215 L AH Rod, California</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$550<span>M</span></span>
                                            <span class="type">For Rent</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>Ruposi Bangla Cottage is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <Link to="/properties_detail"><img src="assets/images/property/property-4.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">MayaKanon de Villa</Link></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>12 EA 1st Ave, Washington</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$550<span>M</span></span>
                                            <span class="type">For Rent</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>MayaKanon de Villa is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <Link to="/properties_detail"><img src="assets/images/property/property-5.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">Azorex de South Villa</Link></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>668 L 2nd Ave, Boston</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$2550</span>
                                            <span class="type">For Sale</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>Azorex de South Villa is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                        {/* <!--Property start--> */}
                        <div class="property-item list col-md-6 col-12 mb-40">
                            <div class="property-inner">
                                <div class="image">
                                    <span class="label">Feature</span>
                                    <Link to="/properties_detail"><img src="assets/images/property/property-6.jpg" alt=""/></Link>
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
                                        <h3 class="title"><Link to="/properties_detail">Radison de Villa</Link></h3>
                                        <span class="location"><img src="assets/images/icons/marker.png" alt=""/>12 1st Ave, New Yourk</span>
                                    </div>
                                    <div class="right">
                                        <div class="type-wrap">
                                            <span class="price">$550<span>M</span></span>
                                            <span class="type">For Rent</span>
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <p>Radison de Villa is the best theme for elit, sed door dolor sit amet, conse ctetur adipiscing elit, sed do eiud in tempor incididun</p>
                                    </div>
                                    <Link to="/properties_detail" class="read-more">View Property</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Property end--> */}

                    </div>

                    <div class="row mt-20">
                        <div class="col">
                            <ul class="page-pagination">
                                <li><Link to="#"><i class="fa fa-angle-left"></i> Prev</Link></li>
                                <li class="active"><Link to="#">01</Link></li>
                                <li><Link to="#">02</Link></li>
                                <li><Link to="#">03</Link></li>
                                <li><Link to="#">04</Link></li>
                                <li><Link to="#">05</Link></li>
                                <li><Link to="#"><i class="fa fa-angle-right"></i> Next</Link></li>
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
                                    <Link to="/properties_detail"><img src="assets/images/property/sidebar-property-1.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="/properties_detail">Friuli-Venezia Giulia</Link></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt=""/>568 E 1st Ave, Miami</span>
                                    <span class="price">$550 <span>Month</span></span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Sale</span>
                                    <Link to="/properties_detail"><img src="assets/images/property/sidebar-property-2.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="/properties_detail">Marvel de Villa</Link></h5>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt=""/>450 E 1st Ave, New Jersey</span>
                                    <span class="price">$2550</span>
                                </div>
                            </div>
                            
                            <div class="sidebar-property">
                                <div class="image">
                                    <span class="type">For Rent</span>
                                    <Link to="/properties_detail"><img src="assets/images/property/sidebar-property-3.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="/properties_detail">Ruposi Bangla Cottage</Link></h5>
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

export default Rent