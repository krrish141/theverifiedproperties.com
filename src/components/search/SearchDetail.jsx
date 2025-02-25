import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";

const SearchDetail = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchLocation = searchParams.get("searchLocation"); // Get the search query from URL
  const { results } = location.state || {}; // Data passed from Search.js

  const [filteredResults, setFilteredResults] = useState([]);

  // If no data is passed, fetch from API and filter results
  useEffect(() => {
    if (!results) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php"
          );
          const result = await response.json();
          const data = result.data || [];

          // Convert search query into lowercase words
          const searchWords = searchLocation.toLowerCase().split(" ");

          // Filter results where any word matches the location
          const filtered = data.filter((item) =>
            searchWords.some((word) => item.Location.toLowerCase().includes(word))
          );

          setFilteredResults(filtered);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      setFilteredResults(results);
    }
  }, [searchLocation, results]);

  return (
    <div className="search-results">
      <div className="page-banner-section section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="page-banner-title">Search - {searchLocation}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Search - {searchLocation}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="property-section section pt-100 pb-60">
        <div className="container">
          <div className="row">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <div className="property-item col-lg-4 col-md-6 col-12 mb-40" key={item.id}>
                  <div className="property-inner" style={{
                    border: "2px solid #ccc",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px"
                  }}>
                    <div className="image">
                      <Link to={`/properties_detail?slug=${item.PostUrl}`}>
                        <img
                          src={item.PostImagePath || "assets/images/property/property-1.jpg"}
                          alt={item.PostTitle}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="left">
                        <h3 className="title">
                          <Link
                            to={`/properties_detail?slug=${item.PostUrl}`}
                            onClick={() => window.location.href = `/properties_detail?slug=${item.PostUrl}`}
                          >{item.PostTitle}</Link>
                        </h3>
                        <span className="location">
                          <img src="assets/images/icons/marker.png" alt="" />
                          {item.Location || "Location not available"}
                        </span>
                      </div>
                      <div className="right">
                        <div className="type-wrap">
                          <span className="price">₹{item.Price}</span>
                          <span className="type">{item.CategoryName}</span>
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
              ))
            ) : (
              <div className="col-md-12 mb-60">
                <div className="section-title center">
                  <h1>No results found!</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
