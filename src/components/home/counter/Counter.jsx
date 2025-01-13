import React from "react";

const Counter = () =>{
    return(
        <>
          {/* <!--Funfact Section start--> */}
  <div class="funfact-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20" style={{ backgroundImage: `url(assets/images/bg/cta-bg.jpg)` }} >
      <div class="container">
          <div class="row">
              
              {/* <!--Funfact start--> */}
              <div class="single-fact col-lg-3 col-6 mb-30">
                  <div class="inner">
                      <div class="head">
                          <i class="pe-7s-home"></i>
                          <h3 class="counter">854</h3>
                      </div>
                      <p>Complete Project</p>
                  </div>
              </div>
              {/* <!--Funfact end--> */}
              
              {/* <!--Funfact start--> */}
              <div class="single-fact col-lg-3 col-6 mb-30">
                  <div class="inner">
                      <div class="head">
                          <i class="pe-7s-graph3"></i>
                          <h3 class="counter">854</h3>
                      </div>
                      <p>Property Sold</p>
                  </div>
              </div>
              {/* <!--Funfact end--> */}
              
              {/* <!--Funfact start--> */}
              <div class="single-fact col-lg-3 col-6 mb-30">
                  <div class="inner">
                      <div class="head">
                          <i class="pe-7s-users"></i>
                          <h3 class="counter">854</h3>
                      </div>
                      <p>Happy Clients</p>
                  </div>
              </div>
              {/* <!--Funfact end--> */}
              
              {/* <!--Funfact start--> */}
              <div class="single-fact col-lg-3 col-6 mb-30">
                  <div class="inner">
                      <div class="head">
                          <i class="pe-7s-medal"></i>
                          <h3 class="counter">854</h3>
                      </div>
                      <p>Awards Win</p>
                  </div>
              </div>
              {/* <!--Funfact end--> */}
              
          </div>
      </div>
  </div>
  {/* <!--Funfact Section end--> */}
        </>
    )
}

export default Counter