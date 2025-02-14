import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchType, setSearchType] = useState("For Rent"); // Optional if you want to include more functionality
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setData] = useState([]); // API data
  const navigate = useNavigate();

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php"
        );
        const result = await response.json();
        setData(result.data || []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter matching titles
    const filteredData = data.filter((item) =>
      item.PostTitle.toLowerCase().includes(searchTitle.toLowerCase())
    );

    // Add search title as a query parameter in the URL
    navigate(`/search-detail?searchTitle=${encodeURIComponent(searchTitle)}`, {
      state: { searchType, searchTitle, results: filteredData },
    });
  };

  return (
    <div className="search-section section pt-50 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <div className="section-title center">
              <h1>Find Your Home/Plot</h1>
            </div>
          </div>
        </div>
        <div className="row center">
          <div className="col">
            <div className="property-search">
              <form onSubmit={handleSubmit} className="center">
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
