import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../home/Home";
import About from "../about/About";

import Rent from "../rent/Rent";
import Rent_Bungalow from "../rent/Rent_Bungalow";
import Rent_Flat from "../rent/Rent_Flat";
import Rent_House from "../rent/Rent_House";

import Search from "../search/Search";
import SearchDetail from "../search/SearchDetail";

import Sale from "../sale/Sale";
import Sale_Bungalow from "../sale/Sale_Bungalow";
import Sale_Flat from "../sale/Sale_Flat";
import Sale_House from "../sale/Sale_House";
import Sale_Land from "../sale/Sale_Land";
import Sale_Desc from "../sale/Sale_Desc";

import Ads from "../advertisment/Ads";

import Blog from "../blog/Blog";
import Blog_detail from "../blog/Blog_detail";
import Properties_detail from "../properties-detail/Properties_detail";
import Contact from "../contact/Contact";
import Header from "../Common/header/Header";
import Footer from "../Common/footer/Footer";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/search" element={<Search />} />
          <Route path="/search-detail" element={<SearchDetail />} />

          <Route path="/rent" element={<Rent />} />
          <Route path="/rent_bungalow" element={<Rent_Bungalow />} />
          <Route path="/rent_flat" element={<Rent_Flat />} />
          <Route path="/rent_house" element={<Rent_House />} />

          <Route path="/ads" element={<Ads/>} />

          <Route path="/sale" element={<Sale />} />
          <Route path="/sale_bungalow" element={<Sale_Bungalow />} />
          <Route path="/sale_flat" element={<Sale_Flat />} />
          <Route path="/sale_house" element={<Sale_House />} />
          <Route path="/sale_land" element={<Sale_Land />} />
          <Route path="/sale_desc" element={<Sale_Desc />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog_detail" element={<Blog_detail />} />
          <Route path="/properties_detail" element={<Properties_detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
