import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sale_Flat = () => {
  const [myData, setMyData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]); // State for featured properties
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [propertiesPerPage] = useState(10); // Show 2 properties per page

  // Fetch data using Axios Promises
  useEffect(() => {
    axios
      .get("https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php")
      .then((response) => {
        console.log("Full API Response:", response.data); // Log full API response
        console.log("Data Array:", response.data.data);  // Log just the 'data' array

        // Ensure data is in the expected format
        if (response.data && Array.isArray(response.data.data)) {
          // Filter properties by CategoryId and SubCategoryId
          const filteredData = response.data.data.filter(
            (post) => post.CategoryId === "1" && post.SubCategoryId === "9"
          );

          console.log("Filtered Data:", filteredData); // Log filtered data

          // Filter featured properties
          const featuredProperties = response.data.data
            .filter((post) => post.Feature === "1")
            .sort((a, b) => b.PostId - a.PostId); // Sort in descending order based on PostId

          setMyData(filteredData); // Set filtered properties
          setFeaturedData(featuredProperties); // Set featured properties
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

  // Logic to determine the properties to display based on the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = myData.slice(indexOfFirstProperty, indexOfLastProperty);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isError && <h2>{isError}</h2>}
      {loading && <p>Loading data...</p>}

      <div className="page-banner-section section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="page-banner-title">Sell - Flat</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Sell Flat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-1 mb-sm-50 mb-xs-50">
              <div className="row">
                <div className="property-item list col-md-6 col-12 mb-40">
                  {/* Check if myData has data, otherwise show 'No properties available' */}
                  {myData.length > 0 ? (
                    currentProperties.map((post) => {
                      const {
                        PostUrl, // Use PostUrl instead of id
                        PostTitle,
                        CategoryName,
                        Subcategory,
                        PostDetails,
                        Price,
                        Area,
                        Road,
                        Location,
                        BHK,
                        PostImagePath,
                      } = post;

                      return (
                        <div key={PostUrl}>
                          <div className="property-inner mb-40">
                            <div className="image">
                              <span className="label">{Subcategory}</span>
                              <a href={`/properties_detail/?slug=${PostUrl}`}>
                                {PostImagePath && <img src={PostImagePath} alt={PostTitle} style={{ height: '275px', objectFit: 'fill' }} />}
                              </a>
                              <ul className="property-feature">
                                <li>
                                  <span className="area">
                                    <img src="assets/images/icons/area.png" alt="" />
                                    {Area}
                                  </span>
                                </li>
                                <li>
                                  <span className="bed">
                                    <img src="assets/images/icons/bed.png" alt="" />
                                    {BHK} Bed
                                  </span>
                                </li>
                                <li>
                                  <span className="parking">
                                    <img src="assets/images/icons/parking.png" alt="" />
                                    {Road}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="left">
                                <h3 className="title">
                                  <a href={`/properties_detail?slug=${PostUrl}`}>{PostTitle}</a>
                                </h3>
                                <span className="location">
                                  <img src="assets/images/icons/marker.png" alt="" />
                                  {Location}
                                </span>
                              </div>
                              <div className="right">
                                <div className="type-wrap">
                                  <span className="price">₹{Price}</span>
                                  <span className="type">For {CategoryName}</span>
                                </div>
                              </div>
                              <div className="desc">
                              <p
  dangerouslySetInnerHTML={{
    __html: (
      PostDetails?.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
        .split(" ")                                // Split into words
        .slice(0, 15)                             // Take the first 10 words
        .join(" ") || "No description available"  // Join back into a string
    )
  }}
/>
                              </div>

<div className="left">
                                <h3 className="title">
                                  <a href={`/properties_detail?slug=${PostUrl}`}>Contact Us</a>
                                </h3>
                              </div>

                              <div className="center">
                                <div className="type-wrap">
                                  {/* WhatsApp button */}
                                  <a href="https://wa.me/918329134673" target="_blank" rel="noopener noreferrer">
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
                                  <a href="tel:+918329134673">
                                    <img
                                      src="assets/images/icons/call.png"
                                      alt="Call"
                                      style={{ height: '40px', objectFit: 'cover' }}
                                    />
                                  </a>
                                </div>
                              </div>

                              <a href={`/properties_detail?slug=${PostUrl}`} className="read-more">
                                View Property
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h2>No properties available in this category.</h2>
                  )}
                </div>
              </div>

              {/* Pagination */}
              <div className="row mt-20">
                <div className="col">
                  <ul className="page-pagination">
                    <li>
                      <Link
                        to="#"
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                      >
                        <i className="fa fa-angle-left"></i> Prev
                      </Link>
                    </li>
                    {/* Pagination Numbers */}
                    {[...Array(Math.ceil(myData.length / propertiesPerPage))].map((_, index) => (
                      <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <Link to="#" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          currentPage < Math.ceil(myData.length / propertiesPerPage) && paginate(currentPage + 1)
                        }
                      >
                        <i className="fa fa-angle-right"></i> Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar with featured properties */}
            <div className="col-lg-4 col-12 order-2 pl-30 pl-sm-15 pl-xs-15">

              <div className="sidebar">
                <h4 className="sidebar-title">
                  <span className="text">Featured Property</span>
                  <span className="shape"></span>
                </h4>

                {/* Sidebar Property start */}
                <div className="sidebar-property-list">
                  {featuredData.length > 0 ? (
                    featuredData.slice(0, 5).map((property) => {
                      const {
                        PostUrl, // Use PostUrl instead of id
                        PostTitle,
                        CategoryName,
                        Location,
                        Price,
                        PostImagePath,
                      } = property;

                      return (
                        <div key={PostUrl} className="sidebar-property">
                          <div className="image">
                            <span className="type">{CategoryName}</span>
                            <a href={`/properties_detail?slug=${PostUrl}`}>
                              {PostImagePath && <img src={PostImagePath} alt={PostTitle} style={{ height: '128px' }} />}
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="title">
                              <a href={`/properties_detail?slug=${PostUrl}`}>{PostTitle}</a>
                            </h5>
                            <span className="location">
                              <img src="assets/images/icons/marker.png" alt="" />
                              {Location}
                            </span>
                            <span className="price">₹{Price}</span>
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
        </div>
      </div>
    </>
  );
};

export default Sale_Flat;
