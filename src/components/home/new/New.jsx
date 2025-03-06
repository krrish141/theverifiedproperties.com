import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const New = () => {
  const [featuredData, setFeaturedData] = useState([]); // State for featured properties
  const [isError, setIsError] = useState(""); // State for error message
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    axios
      .get("https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php")
      .then((response) => {
        console.log(response.data); // Check what the API returns

        if (Array.isArray(response.data)) {
          const featuredProperties = response.data
            .filter((post) => post.Feature === "1")
            .sort((a, b) => b.PostId - a.PostId); // Sort in descending order based on PostId

          setFeaturedData(featuredProperties);
        } else if (response.data && Array.isArray(response.data.data)) {
          const featuredProperties = response.data.data
            .filter((post) => post.NewAdded === "1")
            .sort((a, b) => b.PostId - a.PostId); // Sort in descending order based on PostId

          setFeaturedData(featuredProperties);
        } else {
          setIsError("Invalid data format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="property-section section pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
      <div className="container">
        {/* Section Title start */}
        <div className="row">
          <div className="col-md-12 mb-60 mb-xs-30">
            <div className="section-title center">
              <h1>Newly Added Property</h1>
            </div>
          </div>
        </div>
        {/* Section Title end */}

        <div className="row">
          {/* Dynamically render properties */}
          {loading && <p>Loading featured properties...</p>}
          {isError && <p>{isError}</p>}
          {featuredData.length > 0 ? (
            featuredData.slice(0, 1000000).map((property) => {
              const {
                PostUrl,
                PostTitle,
                Location,
                Price,
                PostImagePath,
                Area,
                CategoryName,
                BHK,
                Road,
                LandType,
              } = property;

              return (
                <div key={PostUrl} className="property-item col-lg-4 col-md-6 col-12 mb-40">
                  <div
                    className="property-inner"
                    style={{
                      border: "2px solid #ccc",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      // minHeight: "80vh", 
                      height: "auto",
                      // display: "flex",
                      // flexDirection: "column",
                      // justifyContent: "space-between",
                    }}
                  >
                    <style>
                      {`
        @media (max-width: 1024px) {
          .property-inner {
            min-height: 70vh;
          }
        }

        @media (max-width: 768px) {
          .property-inner {
            min-height: 60vh;
          }
        }

       
        }
      `}
                    </style>
                    <div className="image">
                      <Link
                        to={`/properties_detail?slug=${PostUrl}`}
                        onClick={() => window.location.href = `/properties_detail?slug=${PostUrl}`}
                      >
                        <LazyLoadImage src={PostImagePath || "assets/images/property/property-1.jpg"} alt={PostTitle} effect="blur" />
                      </Link>
                      {/* <ul className="property-feature">
                        <li>
                          <span className="area"><img src="assets/images/icons/area.png" alt="" />{Area || "550"} SqFt</span>
                        </li>
                        <li>
                          <span className="bed"><img src="assets/images/icons/bed.png" alt="" />{BHK || 'NA'}</span>
                        </li>
                        <li>
                          <span className="bath"><img src="assets/images/icons/parking.png" alt="" />{Road || 'NA'}</span>
                        </li>
                        <li>
                          <span className="parking"><img src="assets/images/icons/area.png" alt="" />{Area || 'NA'}</span>
                        </li>
                      </ul> */}
                    </div>
                    <div className="content">

                      <div className="left">
                        <h3 className="title">
                          <Link
                            to={`/properties_detail?slug=${PostUrl}`}
                            onClick={() => window.location.href = `/properties_detail?slug=${PostUrl}`}
                          >{PostTitle}</Link>
                        </h3>

                        
                        <span className="location" style={{fontWeight:"600"}}>
                          Plot Area: {Area || " not available"}
                        </span>
                      

                      </div>

                      <div className="right">
                        <div className="type-wrap">
                          <span className="price">{Price || "NA"}</span>
                          <span className="type">{CategoryName}</span>
                        </div>
                      </div>


                    </div>
                    <hr />


                    <div className="content">
                      <div className="left">
                        <span className="location">
                          <img src="assets/images/icons/marker.png" alt="" />
                          {Location || "Location not available"}
                        </span>
                      </div>

                    </div>

                    <hr />

                    <div className="content">
                      <div className="left">
                        <h3 className="title">
                          Contact Us
                        </h3>
                      </div>

                      <div className="center">
                        <div className="type-wrap">
                          {/* WhatsApp button */}
                          <a href="https://wa.me/917972108208" target="_blank" rel="noopener noreferrer">
                            <img
                              src="assets/images/icons/whatsapp.png"
                              alt="WhatsApp"
                              style={{ height: '40px', objectFit: 'cover' }}
                            />
                          </a>
                        </div>
                      </div>

                      <div className="right">
                        <div className="type-wrap">
                          {/* Call button */}
                          <a href="tel:+917972108208">
                            <img
                              src="assets/images/icons/call.png"
                              alt="Call"
                              style={{ height: '40px', objectFit: 'cover' }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          ) : (
            <p>No featured properties available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default New;
