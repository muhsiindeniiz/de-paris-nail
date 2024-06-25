import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config";
import Loading from "./Loading";
import ExampleComponent from "./ExampleComponent";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLoging] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid) {
        setIsLoging(true);
      } else {
        setIsLoging(false);
      }
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
      setIsLoging(false);
    });
  };

  const database = getDatabase();
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "/"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPriceData(data[0].header);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <Loading />;

  return (
    <header id="header" className="header tra-menu navbar-dark">
      <div className="header-wrapper">
        {/* Mobile Header */}
        <div className="wsmobileheader clearfix">
          <span
            className="smllogo"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {priceData?.name}
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span></span>
          </a>
          <a href={`tel:${priceData?.phone}`} className="callusbtn ico-20">
            <span className="flaticon-phone-call-1"></span>
          </a>
        </div>

        {/* Main Navigation */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* Desktop Logo */}
            <div className="desktoplogo">
              <a
                href="#hero-9"
                className="logo-black"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {priceData?.name}
              </a>
            </div>
            <div className="desktoplogo">
              <a href="#hero-9" className="logo-white">
                {priceData?.name}
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list">
                {/* About Dropdown Menu */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#hero-9">{priceData?.about}</a>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#services-2">{priceData?.services}</a>
                </li>
                {/* Simple Navigation Links */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#about-5">{priceData?.time}</a>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#pricing-3">{priceData?.prices}</a>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#gallery-2">{priceData?.gallery}</a>
                </li>

                {/* Header Button */}
                <li className="nl-simple" aria-haspopup="true">
                  <a
                    href="#footer-3"
                    className="btn violet-red--btn tra-black--hover last-link"
                  >
                    {priceData?.contacts}
                  </a>
                </li>
                {!isLogin ? (
                  <li className="nl-simple" aria-haspopup="true">
                    <Link to="/login" className="btn last-link">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nl-simple" aria-haspopup="true">
                    <a href="#!">
                      <img
                        className="rounded-circle"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s"
                        alt="User"
                        onClick={toggleMenu}
                        width="32"
                        height="32"
                      />
                    </a>

                    {isOpen && (
                      <div
                        className="dropdown-menu dropdown-menu-right show"
                        aria-labelledby="user-menu-button"
                      >
                        <Link
                          to="/dashboard"
                          className="dropdown-item"
                          role="menuitem"
                          id="user-menu-item-0"
                        >
                          Panel
                        </Link>
                        <a
                          href="#"
                          className="dropdown-item"
                          role="menuitem"
                          id="user-menu-item-2"
                          onClick={logout}
                        >
                          Sign out
                        </a>
                      </div>
                    )}
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
