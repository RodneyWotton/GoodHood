import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurMission from "./pages/OurMission";
import Donations from "./pages/Donations";
import DonatePage1 from "./pages/DonatePages/DonatePage1";
import DonatePage2 from "./pages/DonatePages/DonatePage2";
import DonatePage3 from "./pages/DonatePages/DonatePage3";
import DonatePage4 from "./pages/DonatePages/DonatePage4";
import Login from "./Login";







import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";



function App() {

    return (
      <BrowserRouter>
        <NavBar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurMission" element={<OurMission />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/donate-page-1" element={<DonatePage1 />} />
        <Route path="/donate-page-2" element={<DonatePage2 />} />
        <Route path="/donate-page-3" element={<DonatePage3 />} />
        <Route path="/donate-page-4" element={<DonatePage4 />} />


      </Routes>
      </BrowserRouter>
    );
}

export default App;
