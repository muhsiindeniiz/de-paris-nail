import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./assets/css/bootstrap.min.css";
import "./assets/css/menu.css";
import "./assets/css/fade-down.css";
import "./assets/css/flaticon.css";
import "./assets/css/flexslider.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import Dashboard from "./pages/Dashboard";
import FooterPage from "./pages/FooterPage";
import Pricess from "./pages/Pricess";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/pricess" element={<Pricess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Suspense>
  );
}

export default App;
