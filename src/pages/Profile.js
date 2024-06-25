import React, { useEffect, useState } from "react";
import Sidebar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../config";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        setUser(user);
        setEmail(user.email); // Firebase'den gelen kullanıcının e-postasını set ediyoruz
      }
    });
  }, [navigate]);

  const handleEmailChange = async () => {
    if (!currentPassword || !newEmail) {
      setAlert({ message: "Please fill in all fields.", type: "danger" });
      return;
    }

    const credential = EmailAuthProvider.credential(email, currentPassword);
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updateEmail(auth.currentUser, newEmail);
      setAlert({ message: "Email updated successfully!", type: "success" });
      setEmail(newEmail);
      setNewEmail("");
      setCurrentPassword("");
    } catch (error) {
      setAlert({ message: error.message, type: "danger" });
    }
  };

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword) {
      setAlert({ message: "Please fill in all fields.", type: "danger" });
      return;
    }

    const credential = EmailAuthProvider.credential(email, currentPassword);
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, newPassword);
      setAlert({ message: "Password updated successfully!", type: "success" });
      setNewPassword("");
      setCurrentPassword("");
    } catch (error) {
      setAlert({ message: error.message, type: "danger" });
    }
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
            <h1 className="text-center mb-4">Profile</h1>
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
            <div className="mb-3">
              <label className="form-label">Current Email:</label>
              <input
                type="email"
                className="form-control"
                value={email} // Firebase'den gelen e-posta değerini input'un value'suna set ediyoruz
                disabled // E-posta adresini değiştirmemesi için disable ediyoruz
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Email:</label>
              <input
                type="email"
                className="form-control"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Current Password:</label>
              <input
                type="password"
                className="form-control"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100 mb-4"
              onClick={handleEmailChange}
              style={{
                background: "orange",
              }}
            >
              Change Email
            </button>
            <div className="mb-3">
              <label className="form-label">New Password:</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              style={{
                background: "orange",
              }}
              onClick={handlePasswordChange}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
