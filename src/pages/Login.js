import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // State for showing success message

  useEffect(() => {
    // Check if user is already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
  }, [navigate]);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        setShowSuccess(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 4000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        setError(errorMessage);
        console.error("Authentication error:", errorCode, errorMessage);
      });
  };

  // Function to convert Firebase error code to user-friendly error message
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "Your account has been disabled.";
      case "auth/user-not-found":
        return "User not found.";
      case "auth/wrong-password":
        return "Incorrect password.";
      default:
        return "Login failed. Please try again.";
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center vh-100">
      <section>
        <div
          className="card shadow p-3 mb-5 bg-body rounded"
          style={{ width: "20rem" }}
        >
          <h2 className="card-title text-center">De Paris Nail Spa</h2>
          <h5 className="card-title text-center mb-3">Admin Login</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="email-address" className="form-label">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                className="form-control"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {showSuccess && (
              <div className="alert alert-success" role="alert">
                Login successful. Redirecting...
              </div>
            )}

            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "green" }}
                onClick={onLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
