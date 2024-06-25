import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import Loading from "./Loading";

const Pricing3 = () => {
  const database = getDatabase();
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "/"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPriceData(data[0].prices); // Assuming data[0] contains the 'prices' array
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
    <section id="pricing-3" className="wide-90 pricing-section division">
      <div className="container">
        <div className="pricing-3-wrapper">
          <div className="row">
            {/* Pricing tables */}
            <div className="col-lg-6 w-full w-100">
              <div className="pricing-3-table pr-25 wow fadeInUp">
                <ul
                  className="pricing-3-list"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    justifyContent: "space-center",
                    width: "100%",
                    gap: "40px",
                  }}
                >
                  {/* Map over priceData to render pricing items */}
                  {priceData &&
                    priceData.map((item, index) => (
                      <li className="pricing-3-item" key={index}>
                        <div className="detail-price">
                          <div className="price-name">
                            <h5 className="h5-lg">{item.name}</h5>
                          </div>
                          <div className="price-dots"></div>
                          <div className="price-number">
                            <h5 className="h5-lg">{item.price}</h5>
                          </div>
                        </div>
                        <div className="price-txt">
                          <p className="p-md">
                            <em>Service length {item.serviceLength} minutes</em>
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/* End of pricing tables */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing3;
