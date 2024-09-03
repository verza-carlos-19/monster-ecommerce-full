import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../../pages/Home/Home";
import About from "../../pages/AboutUS/About";
import Products from "../../pages/Products/Products";
import Contact from "../../pages/ContactUS/Contact";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" key={"home"} element={<Home key="home" />} />
          <Route
            path="/nosotros"
            key={"about"}
            element={<About key="about" />}
          />
          <Route
            path="/productos"
            key={"products"}
            element={<Products key="products" />}
          />
          <Route
            path="/contacto"
            key={"contact"}
            element={<Contact key="contact" />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
