import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pgae/Home";
import About from "./Pgae/About";
import Contact from "./Pgae/Contact";
import Errorpage from "./Pgae/Errorpage";
import Footer from "./components/Footer";

export default function App() {
  return <>
    <Header />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path='*' element={<Errorpage />} />
    </Routes>
    <Footer />
  </>
}