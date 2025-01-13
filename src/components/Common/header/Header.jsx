import React from 'react';
import ScrollToTop from '../ScrollToTop';
import GoogleTranslate from '../Language';

const Header = () => {
   

    return (
        <>
            <ScrollToTop />

            <div className="preloader">
                <div className="spinner"></div>
            </div>


            <header className="header header-sticky">
                <div className="header-bottom menu-center">
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* Logo */}
                            <div className="col mt-10 mb-10">
                                <div className="logo">
                                    <a href="/"><img src="assets/images/logo.png" alt="Logo" /></a>
                                </div>
                            </div>

                            {/* Menu */}
                            <div className="col d-none d-lg-flex">
                                <nav className="main-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li className="has-dropdown">
                                            <a href="/sale">Sell</a>
                                            <ul className="sub-menu">
                                                <li><a href="/sale_bungalow">Bungalow</a></li>
                                                <li><a href="/sale_flat">Flat</a></li>
                                                <li><a href="/sale_house">House</a></li>
                                                <li><a href="/sale_land">Land</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="/rent">Rent</a>
                                            <ul className="sub-menu">
                                                <li><a href="/rent_bungalow">Bungalow</a></li>
                                                <li><a href="/rent_flat">Flat</a></li>
                                                <li><a href="/rent_house">House</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        {/* <li>  <GoogleTranslate /></li> */}
                                    </ul>
                                </nav>
                            </div>

                            {/* User */}
                            <div className="col mr-sm-50 mr-xs-50  ">
                            <span><GoogleTranslate /></span>
                    </div>
                       

                            <div class="row mr-50">
                    <div class="col-12 d-flex d-lg-none">
                        <div class="mobile-menu"></div>
                    </div>
                </div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
