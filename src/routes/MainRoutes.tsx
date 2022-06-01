import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Home from "../components/Home/Home";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
