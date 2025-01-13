import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FeaturedProperties = () => {
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
    <div className="sidebar">
      <h4 className="sidebar-title">
        <span className="text">Featured Property</span>
        <span className="shape"></span>
      </h4>

      {/* Sidebar Property start */}
      <div className="sidebar-property-list">
        {loading && <p>Loading featured properties...</p>}
        {isError && <p>{isError}</p>}
        {featuredData.length > 0 ? (
          featuredData.slice(0, 5).map((property) => {
            const { PostUrl, PostTitle, CategoryName, Location, Price, PostImagePath } = property;

            return (
              <div key={PostUrl} className="sidebar-property">
                <div className="image">
                  <span className="type">{CategoryName}</span>
                  <Link 
  to={`/properties_detail?slug=${PostUrl}`} 
  onClick={() => window.location.href = `/properties_detail?slug=${PostUrl}`}
>
                    {PostImagePath && <img src={PostImagePath} alt={PostTitle} style={{ height: "128px" }} />}
                  </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link 
  to={`/properties_detail?slug=${PostUrl}`} 
  onClick={() => window.location.href = `/properties_detail?slug=${PostUrl}`}
>{PostTitle}</Link>
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
  );
};

export default FeaturedProperties;
