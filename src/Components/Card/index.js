import React from "react";

import { MaterialUICard } from "./styles";
const Card = ({ children, ...props }) => {
  return <MaterialUICard>{children}</MaterialUICard>;
};

export { Card };
