import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Feature = () => {
  const [featuredData, setFeaturedData] = useState([]); // State for featured properties
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(true);

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
            .filter((post) => post.Feature === "1")
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
    <>
      {/* Feature property section start */}
      <div className="property-section section bg-gray pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container" >
          {/* Section Title */}
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>Feature Property</h1>
              </div>
            </div>
          </div>
          {/* Property Slider */}
          <div className="row">
            <div className="property-carousel section slider-space-30">

              {/* Dynamically render properties */}
              {loading && <p>Loading featured properties...</p>}
              {isError && <p>{isError}</p>}
              {featuredData.length > 0 ? (
                featuredData.slice(0, 25).map((property) => {
                  const { PostUrl, PostTitle, CategoryName, Location, Price, PostImagePath, Area, BHK, Road, LandType } = property;
                  return (
                    <div key={PostUrl} className="property-item col">
                      <div 
  className="property-inner" 
  style={{
    border: "2px solid #ccc",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius:"10px"
  }}
>
                        <div className="image">
                          <Link 
                            to={`/properties_detail?slug=${PostUrl}`} 
                            onClick={() => window.location.href = `/properties_detail?slug=${PostUrl}`}
                          >
                            {PostImagePath && <LazyLoadImage src={PostImagePath} alt={PostTitle} effect="blur" style={{ height: '270px', objectFit: 'cover' }} />}
                          </Link>
                          {/* <ul className="property-feature">
                            <li>
                              <span className="area"><img src="assets/images/icons/area.png" alt="" />{Area} SqFt</span>
                            </li>
                            <li>
                              <span className="bed"><img src="assets/images/icons/bed.png" alt="" />{BHK}</span>
                            </li>
                            <li>
                              <span className="bath"><img src="assets/images/icons/parking.png" alt="" />{Road}</span>
                            </li>
                            <li>
                              <span className="parking"><img src="assets/images/icons/area.png" alt="" />{LandType}</span>
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
                            <span className="location">
                              <img src="assets/images/icons/marker.png" alt="" />
                              {Location}
                            </span>
                          </div>
                          <div className="right">
                            <div className="type-wrap">
                              <span className="price">₹{Price}</span>
                              <span className="type">{CategoryName}</span>
                            </div>
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
      </div>
      {/* Feature property section end */}


      {/* Feature section */}

      <div class="feature-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
          <div class="feature-wrap row row-25">


            <div class="col-lg-4 col-sm-6  col-12 mb-50">
              <div class="feature">
                <div class="icon"><i class="pe-7s-science"></i></div>
                <div class="content">
                  <h4>Tailored Options:</h4>
                  <p>Whether you're looking for a cozy apartment, a spacious family home, or a commercial space, we have something for everyone.</p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-sm-6  col-12 mb-50">
              <div class="feature">
                <div class="icon"><i class="pe-7s-display1"></i></div>
                <div class="content">
                  <h4>Expert Guidance:</h4>
                  <p> Our team of experts will guide you through every step of the buying process.</p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-sm-6  col-12 mb-50">
              <div class="feature">
                <div class="icon"><i class="pe-7s-signal"></i></div>
                <div class="content">
                  <h4>Affordable Solutions:</h4>
                  <p>We work hard to find properties that match your budget and aspirations.</p>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </>
  );
};

export default Feature;
