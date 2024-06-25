import React from "react";

const Banner3 = () => {
  return (
    <section id="banner-3" className="bg-fixed banner-section division">
      <div className="container">
        <div className="row">
          {/* BANNER TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="banner-3-txt text-center">
              {/* Title */}
              <h5 className="h5-md">
                We want to make every girl pretty, happy, and loved!
              </h5>
              <h2>20% OFF</h2>
              <h4 className="h4-lg">On All Services</h4>
              {/* Banner Button */}
              <div className="banner-btns">
                <a href="services.html" className="btn btn-md btn-tra-white">
                  Book Now
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END BANNER TEXT */}
          {/* BANNER IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="banner-3-img text-center wow fadeInRight">
              <img
                className="img-fluid"
                src="images/banner-3.png"
                alt="banner-image"
              />
            </div>
          </div>{" "}
          {/* END BANNER IMAGE */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Banner3;
