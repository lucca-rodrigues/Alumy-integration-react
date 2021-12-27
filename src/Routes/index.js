import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { TemplateHome } from "../Templates";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<TemplateHome />} />
      {/* <Route path="/details" element={<Details />} /> */}
    </Router>
  );
};

export { Routes };
