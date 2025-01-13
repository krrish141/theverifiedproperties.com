import React from "react";
import {Link} from "react-router-dom";

const Blog_detail = () => {
    return(
        <>
         
    {/* <!--Page Banner Section start--> */}
    <div class="page-banner-section section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="page-banner-title">Blog Details</h1>
                    <ul class="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">Blog Details  </li>
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
               
                <div class="col-xl-9 col-lg-8 col-12 order-1 mb-sm-50 mb-xs-50">
                    
                    <div class="single-news-item">
                        <div class="image"><img src="assets/images/news/news-details-1.jpg" alt=""/></div>
                        <div class="content">
                            <h2 class="title">Duplex Villa with Altra Concept</h2>
                            <ul class="news-meta">
                                <li>By - <Link to="#">Donald</Link></li>
                                <li>September 30, 2022</li>
                            </ul>
                            <div class="desc">
                                <p>Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem </p>
                                <p>Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                <blockquote class="blockquote">
                                    <p>We are the  of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                </blockquote>
                                <p>Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            </div>
                            <div class="news-footer">
                                <div class="tags"><span>Tags:</span> <Link to="#">Oil</Link><Link to="#">Beard Oil</Link><Link to="#">Beard</Link></div>
                                <div class="share"><span>Share:</span> <Link to="#"><i class="fa fa-facebook"></i></Link><Link to="#"><i class="fa fa-twitter"></i></Link><Link to="#"><i class="fa fa-linkedin"></i></Link><Link to="#"><i class="fa fa-google-plus"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="news-navigation mb-50">
                        <Link to="#" class="prev-blog"><i class="fa fa-long-arrow-left"></i>Previous</Link>
                        <Link to="#" class="next-blog"><i class="fa fa-long-arrow-right"></i>Next</Link>
                    </div>
                        
                    {/* <!--Comment start--> */}
                    <div class="comment-wrap section">
                        
                      

                        <h3>Leave a Comment</h3>

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
                
                <div class="col-xl-3 col-lg-4 col-12 order-2 pl-30 pl-sm-15 pl-xs-15">
                 
                   
                    
                    {/* <!--Sidebar start--> */}
                    <div class="sidebar">
                        <h4 class="sidebar-title"><span class="text">Popular News</span><span class="shape"></span></h4>
                        
                        {/* <!--Sidebar Property start--> */}
                        <div class="sidebar-news-list">
                            
                            <div class="sidebar-news">
                                <div class="image">
                                    <Link to=""><img src="assets/images/news/sidebar-news-1.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="">Duplex Villa with Altra Concept</Link></h5>
                                    <span class="date">September 30, 2022</span>
                                </div>
                            </div>
                            
                            <div class="sidebar-news">
                                <div class="image">
                                    <Link to=""><img src="assets/images/news/sidebar-news-2.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="">Joint Mortgage: Pros vs. Cons</Link></h5>
                                    <span class="date">September 30, 2022</span>
                                </div>
                            </div>
                            
                            <div class="sidebar-news">
                                <div class="image">
                                    <Link to=""><img src="assets/images/news/sidebar-news-3.jpg" alt=""/></Link>
                                </div>
                                <div class="content">
                                    <h5 class="title"><Link to="">Dealing with Student Loan Debt</Link></h5>
                                    <span class="date">September 30, 2022</span>
                                </div>
                            </div>
                            
                        </div>
                        {/* <!--Sidebar Property end--> */}
                        
                    </div>
                    
                
                    
                 
                </div>
                
            </div>
        </div>
    </div>
    {/* <!--News Section end--> */}
        </>
    )
}

export default Blog_detail