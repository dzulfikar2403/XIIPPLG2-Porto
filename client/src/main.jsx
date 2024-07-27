import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import GallerryPage from "./pages/GallerryPage.jsx";
import SiswaPage from "./pages/SiswaPage.jsx";
import DetailSiswa from "./pages/DetailSiswa.jsx";
import DetailGallery from "./pages/DetailGallery.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GallerryPage />} />
        <Route path="/gallery/:id" element={<DetailGallery />} />
        <Route path="/dataSiswa" element={<SiswaPage />} />
        <Route path="/dataSiswa/:id" element={<DetailSiswa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/gallery" element={<p>gallery</p>} />
        <Route path="/dashboard/dataSiswa" element={<p>data siswa</p>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
