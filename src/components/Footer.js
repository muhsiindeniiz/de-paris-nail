import React, { useEffect, useState } from "react";
import footermap from "../assets/images/footer-map.png";
import { child, get, getDatabase, ref } from "firebase/database";
import Loading from "./Loading";

const Footer = () => {
  const database = getDatabase();
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "/"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setFooterData(data[0].location);
          setLoading(false);
        } else {
          console.log("Data not available");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [database]);

  if (loading) return <Loading />;

  return (
    <footer id="footer-3" className="1bg--deep-blue footer division">
      <div className="container 1white-smoke--color">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-3">
            <div className="footer-contacts mb-30">
              {/* Title */}
              <h5 className="h5-md">Location</h5>

              {/* Salon Name */}
              <p className="p-lg txt-600">{footerData?.name}</p>

              {/* Address */}
              <p className="p-lg">{footerData?.address}</p>
            </div>
          </div>
          {/* END FOOTER CONTACTS */}

          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-3">
            <div className="footer-contacts mb-30">
              {/* Title */}
              <h5 className="h5-md">Contacts</h5>

              {/* Phone */}
              <p className="p-lg">
                <a href="tel:+15106564091">ph: {footerData?.phone}</a>
              </p>

              {/* Email */}
              <p className="p-lg">
                <a href="mailto:yourdomain@mail.com" className="txt-600">
                  {footerData?.email}
                </a>
              </p>
            </div>
          </div>
          {/* END FOOTER CONTACTS */}

          {/* FOOTER INFO */}
          <div className="col-sm-6 col-lg-3">
            <div className="footer-info mb-30">
              {/* Title */}
              <h5 className="h5-md">Opening Hours</h5>

              <p className="p-lg">Mon: 10:00 AM - 7:00 PM</p>
              <p className="p-lg">Tue: 10:00 AM - 7:00 PM</p>
              <p className="p-lg">Wed: 10:00 AM - 7:00 PM</p>
              <p className="p-lg">Thu: 10:00 AM - 7:00 PM</p>
              <p className="p-lg">Fri: 10:00 AM - 7:00 PM</p>
              <p className="p-lg">Sat: 10:00 AM - 6:00 PM</p>
              <p className="p-lg">Sun: 11:00 AM - 6:00 PM</p>
            </div>
          </div>
          {/* END FOOTER INFO */}

          {/* FOOTER GOOGLE MAP */}
          <div className="col-sm-6 col-lg-3">
            <div className="google-map mb-30">
              <a
                href="https://www.google.com/maps/place/5790+Mowry+School+Rd,+Newark,+CA+94560,+USA/@37.5198975,-121.9947896,17z/data=!3m1!4b1!4m6!3m5!1s0x808fc0aaad165e97:0xc3137ea9b1485386!8m2!3d37.5198975!4d-121.9922147!16s%2Fg%2F11ggr9khfq?entry=ttu"
                target="_blank"
              >
                <img className="img-fluid" src={footermap} alt="footer-map" />
              </a>
            </div>
          </div>
          {/* END FOOTER GOOGLE MAP */}
        </div>
        {/* END FOOTER CONTENT */}

        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            {/* FOOTER COPYRIGHT */}
            <div className="col">
              <div className="footer-copyright">
                <p className="p-md">
                  © 2021 De Paris Nail Spa. All Rights Reserved
                </p>
              </div>
            </div>

            {/* BOTTOM FOOTER LINKS */}
            <div className="col">
              <ul className="bottom-footer-list text-end">
                <li className="first-li">
                  <p className="p-md">
                    <a href="#">Privacy Policy</a>
                  </p>
                </li>
                <li className="last-li">
                  <p className="p-md">
                    <a href="#">Terms &amp; Conditions</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
