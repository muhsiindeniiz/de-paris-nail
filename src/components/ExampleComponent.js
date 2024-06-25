import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ExampleComponent = () => {
  const selectRef = useRef(null);

  const handleImageClick = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  const logout = () => {
    // Implement logout functionality
    console.log("Logged out");
  };

  return (
    <>
      <select
        ref={selectRef}
        className="form-select"
        aria-label="Default select example"
        id="a"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label
        htmlFor="a"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
          alt="avatar"
          className="img-fluid rounded-circle me-3"
          width="35"
        />
      </label>
      <li className="nl-simple" aria-haspopup="true">
        <Link to="/dashboard" className="btn last-link">
          Panel
        </Link>
      </li>
      <li className="nl-simple" aria-haspopup="true">
        <Link to="#" className="btn last-link" onClick={logout}>
          LogOut
        </Link>
      </li>
    </>
  );
};

export default ExampleComponent;
