import Navbar from "./Components/Navbar/Navbar.js";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.js";
import Location from "./Pages/Location.js";
import Contact from "./Pages/ContactUs.js";
import About from "./Pages/AboutUs.js";
import Footer from "./Components/Footer/Footer.js";
import Pay from "./Pages/Pay.js";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        ></link>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Pay" element={<Pay />} />
          </Routes>
        </div>
        <meta charset="UTF-8" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet" /*code for font awesome icons */
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
