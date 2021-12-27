import React from "react";

import { MaterialUIButton } from "./styles";
const Button = ({ title, ...props }) => {
  return <MaterialUIButton>{title}</MaterialUIButton>;
};

export { Button };
