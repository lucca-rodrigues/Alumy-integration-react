import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Home } from "../Pages";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
};

export { Routes };
