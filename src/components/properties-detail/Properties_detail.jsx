import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Feature from "./Feature";

const Properties_detail = () => {
    const location = useLocation(); // Hook to get the current URL location
    const queryParams = new URLSearchParams(location.search); // Extract query parameters
    const PostUrl = queryParams.get("slug"); // Get the slug parameter

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            if (!PostUrl) {
                setError("Slug parameter is missing.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://theverifiedproperties.com/the-verified-properties-admin/api/get_property_id.php?slug=${PostUrl}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch property details");
                }
                const data = await response.json();
                setProperty(data.data[0]); // Assuming the response contains data array
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [PostUrl]); // Dependency array now includes PostUrl to trigger refetch when it changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {property ? (
                <div>
                    {/* Page Banner Section */}
                    <div className="page-banner-section section"
                        style={{
                            backgroundImage: 'url(assets/images/bg/single-property-bg.jpg)',
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1 className="page-banner-title">{property.PostTitle}</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">{property.PostTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Banner Section */}

                    <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
                                    <div className="row">
                                        <div className="single-property col-12 mb-50">
                                            <div className="property-inner">

                                                <div className="head">
                                                    <div className="left">
                                                        <h1 className="title">{property.PostTitle}</h1>
                                                        <span className="location"><img src="assets/images/icons/marker.png" alt="" />{property.Location}</span>
                                                    </div>
                                                    <div className="right">

                                                        <div className="type-wrap">
                                                            <span className="price">₹{property.Price}</span>
                                                            <span className="type">{property.CategoryName}</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* Updated Images Section */}
                                                <div className="image mb-30">
                                                    <div className="single-property-gallery">
                                                        {property.AllImagePaths && property.AllImagePaths.length > 0 ? (
                                                            property.AllImagePaths.map((image, index) => (
                                                                <div className="item" key={index}>
                                                                    <img src={image} alt={`Property Image ${index + 1}`} />
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p>No images available</p>
                                                        )}
                                                    </div>
                                                    <div className="single-property-thumb">
                                                        {property.AllImagePaths && property.AllImagePaths.length > 0 ? (
                                                            property.AllImagePaths.map((image, index) => (
                                                                <div className="item" key={index}>
                                                                    <img src={image} alt={`Property Thumbnail ${index + 1}`} />
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p>No images available</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <h3>Description:</h3>
                                                    <p dangerouslySetInnerHTML={{ __html: property.PostDetails || "No description available" }} />


                                                    <div className="row mt-30 mb-30">
                                                        <div className="col-md-4 col-12 mb-xs-30">
                                                            <h3>Condition:</h3>
                                                            <ul className="feature-list">
                                                                {property.Area && <li><div className="image"><img src="assets/images/icons/area.png" alt="" /></div>Area : {property.Area} sq ft</li>}
                                                                {property.BHK && <li><div className="image"><img src="assets/images/icons/bed.png" alt="" /></div>Bedroom : {property.BHK}</li>}
                                                                {property.ApprovedBy && <li><div className="image"><img src="assets/images/icons/approved.png" alt="" /></div>ApprovedBy : {property.ApprovedBy}</li>}
                                                                {property.LandType && <li><div className="image"><img src="assets/images/icons/land.png" alt="" /></div>LandType : {property.LandType}</li>}
                                                                {property.Ownership && <li><div className="image"><img src="assets/images/icons/deal.png" alt="" /></div> Ownership : {property.Ownership}</li>}
                                                            </ul>
                                                        </div>

                                                        <div className="col-md-8 col-12">
                                                            <h3>Benefits:</h3>
                                                            <ul className="amenities-list">
                                                                {property.CategoryName && <li>Property Type: {property.CategoryName}</li>}
                                                                {property.Subcategory && <li>Plot Type: {property.Subcategory}</li>}
                                                                {property.Location && <li>Location: {property.Location}</li>}
                                                                {property.LandType && <li>LandType: {property.LandType}</li>}
                                                                {property.ApprovedBy && <li>Approved By: {property.ApprovedBy}</li>}
                                                                {property.SquareFeet && <li>SquareFeet: {property.SquareFeet}</li>}
                                                                {property.Ownership && <li>Ownership: {property.Ownership}</li>}
                                                                {property.CornerProperty && <li>CornerProperty: {property.CornerProperty}</li>}
                                                                {property.Overlooking && <li>Overlooking: {property.Overlooking}</li>}
                                                            </ul>

                                                        </div>

                                                    </div>

                                                    <div class="row">


                                                        <div className="col-12 mb-30">
                                                            <h3>Video</h3>
                                                            {property.AllVideoPaths && property.AllVideoPaths.length > 0 ? (
                                                                property.AllVideoPaths.map((video, index) => (
                                                                    <div className="embed-responsive ratio ratio-16x9 mt-50" key={index}>
                                                                        <video controls>
                                                                            <source src={video} type="video/mp4" />
                                                                            Your browser does not support the video tag.
                                                                        </video>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <p>No videos available</p>
                                                            )}
                                                        </div>



                                                        {/* <div class="col-12">
                                                            <h3>Location</h3>
                                                            <div class="embed-responsive ratio ratio-16x9">
                                                                <div id="single-property-map" class="embed-responsive-item google-map" data-lat="40.740178" data-Long="-74.190194"></div>
                                                            </div>
                                                        </div> */}
                                                    </div>


                                                    <div className="row">
                                                        {/* <div className="col-12 mb-30">
                                                            <h3>Video</h3>

                                                            <div className="image mb-30">
                                                                <div className="single-property-gallery">
                                                                    {property.AllVideoPaths && property.AllVideoPaths.length > 0 ? (
                                                                        property.AllVideoPaths.map((video, index) => (
                                                                            <div className="item" key={index}>
                                                                                <video controls>
                                                                                    <source src={video} type="video/mp4" />
                                                                                    Your browser does not support the video tag.
                                                                                </video>
                                                                            </div>
                                                                        ))
                                                                    ) : (
                                                                        <p>No videos available</p> // Optionally show a message if no videos are present
                                                                    )}
                                                                </div>
                                                                <div className="single-property-thumb">
                                                                    {property.AllVideoPaths && property.AllVideoPaths.length > 0 ? (
                                                                        property.AllVideoPaths.map((video, index) => (
                                                                            <div className="item" key={index}>
                                                                                <video width="100" height="100" controls>
                                                                                    <source src={video} type="video/mp4" />
                                                                                    Your browser does not support the video tag.
                                                                                </video>
                                                                            </div>
                                                                        ))
                                                                    ) : (
                                                                        <p>No videos available</p> // Optionally show a message if no videos are present
                                                                    )}
                                                                </div>


                                                            </div>


                                                        </div> */}

                                                        <div class="comment-form">
                                                            <div class="col-12"><button class="btn" style={{ backgroundColor: '#29a71a' }}><img
                                                                src="assets/images/icons/whatsapp.png"
                                                                alt="WhatsApp"
                                                                style={{ height: '40px', objectFit: 'cover' }}
                                                            /> Whatsapp Us</button></div>

                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 order-2 pl-30 pl-sm-15 pl-xs-15">
                                    <Feature />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <p>No property details found.</p>
            )}
        </div>
    );
};

export default Properties_detail;
