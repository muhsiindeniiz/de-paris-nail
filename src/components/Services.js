import React from "react";

const services = [
  {
    id: "sb-2-1",
    icon: "flaticon-pedicure-1",
    title: "Nail Care",
    text: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
    link: "pricing.html",
    delay: "0.3s",
  },
  {
    id: "sb-2-2",
    icon: "flaticon-nail-polish-3",
    title: "Nail Art",
    text: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
    link: "pricing.html",
    delay: "0.6s",
  },
  {
    id: "sb-2-3",
    icon: "flaticon-soak",
    title: "Add-Ons",
    text: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
    link: "pricing.html",
    delay: "0.9s",
  },
];

const ServicesSection = () => {
  return (
    <section id="services-2" className="wide-70 services-section division">
      <div className="container">
        <div className="sbox-2-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {services.map((service) => (
              <div className="col" key={service.id}>
                <div
                  id={service.id}
                  className="sbox-2 mb-40 wow fadeInUp"
                  data-wow-delay={service.delay}
                >
                  {/* Icon */}
                  <div className="sbox-ico ico-95 black--color">
                    <span className={service.icon}></span>
                  </div>

                  {/* Title */}
                  <h5 className="h5-lg">{service.title}</h5>

                  {/* Text */}
                  <p className="p-lg">{service.text}</p>

                </div>
              </div>
            ))}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END SERVICES-2 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default ServicesSection;
