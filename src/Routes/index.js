import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Details } from "../Pages/Details";
import { Home } from "../Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Router>
  );
};

export { Routes };
