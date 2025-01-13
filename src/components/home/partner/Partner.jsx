import React from "react";

const Partner = () => {
    return(
        <>
         {/* <!--Brand section start--> */}
  <div className="brand-section section  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
      <div className="container">
         
          {/* <!--Section Title start--> */}
          <div className="row">
              <div className="col-md-12 mb-60 mb-xs-30">
                  <div className="section-title center">
                      <h1>Collab With</h1>
                  </div>
              </div>
          </div>
          {/* <!--Section Title end--> */}
          
          <div className="row">
              
              {/* <!--Brand Slider start--> */}
              <div className="brand-carousel section slider-space-30">
                  <div className="brand col"><img src="assets/images/brands/kokan.png" alt="" /></div>
                  <div className="brand col"><img src="assets/images/brands/make-properties.jpeg" alt="" style={{    border:"2px solid #874b9c",  borderRadius: "20px"}} /></div>
              </div>
              {/* <!--Brand Slider end--> */}

             
              
          </div>
          
      </div>
  </div>
  {/* <!--Brand section end--> */}
        </>
    )
}

export default Partner