import React from "react";
import image1 from "../assets/images/700x700_1.jpg";

const About3 = () => {
  return (
    <section id="about-3a" className="about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-last order-md-2">
            <div
              className="img-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <img className="img-fluid" src={image1} alt="about-image" />
            </div>
          </div>

          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-first order-md-2">
            <div
              className="txt-block right-column wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              {/* Section ID */}
              <div className="section-id">Get Your Shine On</div>

              {/* Title */}
              <h3 className="h3-md">Choose the Glamour</h3>

              {/* Text */}
              <p className="p-lg">
                Nullam tempor sapien gravida donec and pretium ipsum porta
                integer justo an odio velna vitae auctor integer congue magna
                undo purus a pretium ligula rutrum magna egestas
              </p>

              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Aliquam vitae molestie at quisque sapien volutpat and justo,
                    aliquet molestie purus efficitur ipsum
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Sagittis congue augue magna risus mauris volutpat and
                    egestas magna suscipit egestas a vitae purus
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default About3;
