import React from "react";

const HeroSection = () => {
  return (
    <section id="hero-9" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-8 col-lg-6">
            <div className="hero-9-txt">
              {/* Title */}
              <h2>Best Nails For Best Moments</h2>

              {/* Text */}
              <p className="p-title-md">
                Feugiat primis and ligula laoreet auctor undo mauris auctor
                laoreet purus pretium a sapien euismod
              </p>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default HeroSection;
