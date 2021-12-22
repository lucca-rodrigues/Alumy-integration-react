import { Routes as Router, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

const Routes = () => {
  <Router>
    <Route path="/" element={Home} />
  </Router>;
};

export { Routes };
