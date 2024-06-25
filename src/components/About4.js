import React from "react";
import polish from '../assets/images/polish.png'

const About4 = () => {
  return (
    <section id="about-4" className="pt-100 about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Fresh, Shiny, Bright</span>
              {/* Title */}
              <h3 className="h3-md">
                Make your day shine with your shiny nails
              </h3>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div className="col-md-6">
            <div className="img-block right-column wow fadeInLeft">
              <img className="img-fluid" src={polish} alt="about-image" />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default About4;
