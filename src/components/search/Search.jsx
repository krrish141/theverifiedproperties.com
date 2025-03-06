import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://theverifiedproperties.com/the-verified-properties-admin/api/get_property.php"
        );
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert search query to lowercase words array
    const searchWords = searchLocation.toLowerCase().split(" ");

    // Filter matching locations
    const filteredData = data.filter((item) =>
      searchWords.some((word) => item.Location.toLowerCase().includes(word))
    );

    // Navigate to search results page
    navigate(`/search-detail?searchLocation=${encodeURIComponent(searchLocation)}`, {
      state: { searchLocation, results: filteredData },
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
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="property-search">
              <form onSubmit={handleSubmit} className="search-form">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-12 pt-100">
            <div className="hero-search">
              <form className="search-container">
                <div className="search-item">
                  <Link to={`/search-detail?searchLocation=land`}>
                    <img src="assets/images/icons/plot.png" alt="Land/ Plots" />
                    <h4>Land</h4>
                  </Link>
                </div>
                <div className="search-item">
                  <Link to={`/search-detail?searchLocation=Apartments `}>
                    <img src="assets/images/icons/apartment.png" alt="Apartments" />
                    <h4>Apartments</h4>
                  </Link>
                </div>
                <div className="search-item">
                  <Link to={`/search-detail?searchLocation=farmland`}>
                    <img src="assets/images/icons/farmland.png" alt="Farmland" />
                    <h4>Farmland</h4>
                  </Link>
                </div>
                <div className="search-item">
                  <Link to={`/search-detail?searchLocation=bungalow`}>
                    <img src="assets/images/icons/country-house.png" alt="Bungalow" />
                    <h4>Bungalow</h4>
                  </Link>
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
