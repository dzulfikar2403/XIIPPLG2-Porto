import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import GallerryPage from "./pages/GallerryPage.jsx";
import SiswaPage from "./pages/SiswaPage.jsx";
import DetailSiswa from "./pages/DetailSiswa.jsx";
import DetailGallery from "./pages/DetailGallery.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";
import Dashboard from "./pages/cms/Dashboard.jsx";
import DashboardGallery from "./pages/cms/DashboardGallery.jsx";
import DashboardSiswa from "./pages/cms/DashboardSiswa.jsx";
import DashboardUsers from "./pages/cms/DashboardUsers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GallerryPage />} />
          <Route path="/gallery/:id" element={<DetailGallery />} />
          <Route path="/dataSiswa" element={<SiswaPage />} />
          <Route path="/dataSiswa/:id" element={<DetailSiswa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<h1>Page Not Found!</h1>} />
          <Route path="/dashboard/home" element={<Dashboard />} />
          <Route path="/dashboard/gallery" element={<DashboardGallery />} />
          <Route path="/dashboard/dataSiswa" element={<DashboardSiswa />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
