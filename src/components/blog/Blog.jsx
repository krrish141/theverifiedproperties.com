import React from "react";
import {Link} from "react-router-dom";

const Blog = () =>{
    return(
        <>
               {/* <!--Page Banner Section start--> */}
    <div class="page-banner-section section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="page-banner-title">Blog</h1>
                    <ul class="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!--Page Banner Section end--> */}

    {/* <!--News Section start--> */}
    <div class="news-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
            
            <div class="row">
               
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-1.jpg" alt=""/></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Duplex Villa with Altra Concept</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-2.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Joint Mortgage: Pros vs. Cons</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-3.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Dealing with Student Loan Debt</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
               
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-4.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Bridging the home ownership gap</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-5.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">7 Signs That the Housing Market Is Cooling Off</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-6.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">6 Mortgage Myths You Can Ignore </Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
               
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-7.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Your ideas are very important to us</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-8.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">We’re doing business with pleasure</Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
                {/* <!--News start--> */}
                <div class="col-lg-4 col-md-6 col-12 mb-30">
                    <div class="news">
                        <div class="image">
                            <Link to="/blog_detail"><img src="assets/images/news/news-9.jpg" alt="" /></Link>
                            <div class="meta-wrap">
                                <ul class="meta">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                                <ul class="meta back">
                                    <li>By <Link to="#">Donald</Link></li>
                                    <li>September 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title"><Link to="/blog_detail">Modern apartment adjacent to eco </Link></h4>
                            <div class="desc">
                                <p>The Verified properties -Buy And Sale Properties, sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit sed do.</p>
                            </div>
                            <Link to="/blog_detail" class="readmore">Continure Reading</Link>
                        </div>
                    </div>
                </div>
                {/* <!--News end--> */}
                
            </div>
            
            <div class="row mt-30">
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
    </div>
    {/* <!--News Section end--> */}

   </>
    )

}

export default Blog