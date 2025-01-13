import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";

const SearchDetail = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchTitle = searchParams.get("searchTitle"); // Get the searchTitle from URL
  const { results } = location.state || {}; // Data passed from the previous page

  const [filteredResults, setFilteredResults] = useState([]);

  // If no data is passed, simulate fetching data based on the searchTitle
  useEffect(() => {
    if (!results) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php"
          );
          const result = await response.json();
          const data = result.data || [];
          const filtered = data.filter((item) =>
            item.PostTitle.toLowerCase().includes(searchTitle.toLowerCase())
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
  }, [searchTitle, results]);

  return (
    <div className="search-results">
      
      <div className="page-banner-section section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="page-banner-title">Search - {searchTitle}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Search - {searchTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Search Results</h1>
      <p>Search Query: {searchTitle}</p> */}


      {/* <div className="property-results"> */}
      <div className="property-section section pt-100 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
      <div className="container">
        

        <div className="row">
        {filteredResults.length > 0 ? (
          <div className="row">
            {filteredResults.map((item) => (
              <div className="property-item col-lg-4 col-md-6 col-12 mb-40" key={item.id}>

                <div className="property-inner">
                  <div className="image">
                    <Link to={`/properties_detail?slug=${item.PostUrl}`}>
                      <img
                        src={
                          item.PostImagePath ||
                          "assets/images/property/property-1.jpg"
                        }
                        alt={item.PostTitle}
                      />
                    </Link>
                    <ul className="property-feature">
                        <li>
                          <span className="area"><img src="assets/images/icons/area.png" alt="" />{item.Area || "NA"} SqFt</span>
                        </li>
                        <li>
                          <span className="bed"><img src="assets/images/icons/bed.png" alt="" />{item.BHK || 'NA'}</span>
                        </li>
                        <li>
                          <span className="bath"><img src="assets/images/icons/parking.png" alt="" />{item.Road || 'NA'}</span>
                        </li>
                        <li>
                          <span className="parking"><img src="assets/images/icons/area.png" alt="" />{item.Area || 'NA'}</span>
                        </li>
                      </ul>
                  </div>
                  <div className="content">
                    <div className="left">
                      <h3 className="title">
                        <Link to={`/properties_detail?slug=${item.PostUrl}`}>
                          {item.PostTitle}
                        </Link>
                      </h3>
                      <span className="location">
                        <img
                          src="assets/images/icons/marker.png"
                          alt="Marker Icon"
                        />
                        {item.Location || "Location not available"}
                      </span>
                    </div>
                    <div className="right">
                      <div className="type-wrap">
                        <span className="price">{item.Price || "NA"}</span>
                        <span className="type">{item.CategoryName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>No results found!</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      </div>
    </div>
    // </div>
  );
};

export default SearchDetail;
