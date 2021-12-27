import React from "react";

import { MaterialUICard } from "./styles";
const Card = ({ children, ...props }) => {
  return <MaterialUICard bgImage={props.bgImage}>{children}</MaterialUICard>;
};

export { Card };
