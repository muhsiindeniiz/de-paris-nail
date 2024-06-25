import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import Sidebar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState({
    about: "",
    contacts: "",
    gallery: "",
    name: "",
    prices: "",
    services: "",
    time: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.uid) navigate("/");
    });

    const db = getDatabase();
    const menuRef = ref(db, "0/header");

    get(menuRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMenu(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu((prevMenu) => ({
      ...prevMenu,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const db = getDatabase();
    const menuRef = ref(db, "0/header");
    set(menuRef, menu)
      .then(() => {
        setAlert({ message: "Menu updated successfully!", type: "success" });
      })
      .catch((error) => {
        console.error(error);
        setAlert({ message: "Error updating menu.", type: "danger" });
      });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ flex: 1 }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-lg-6">
            <h1 className="text-center mb-4">Edit Menu</h1>
            {alert.message && (
              <div
                className={`alert alert-${alert.type} alert-dismissible fade show`}
                role="alert"
              >
                {alert.message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <form>
              {Object.keys(menu).map((key) => (
                <div className="mb-3" key={key}>
                  <label className="form-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name={key}
                    value={menu[key]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <button
                type="button"
                className="btn w-100"
                style={{
                  backgroundColor: "orange",
                }}
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
