import React from "react";

import { MaterialUICard } from "./styles";
const Card = ({ children, ...props }) => {
  return (
    <MaterialUICard bgImage={props.bgImage} padding={props.padding}>
      {children}
    </MaterialUICard>
  );
};

export { Card };
