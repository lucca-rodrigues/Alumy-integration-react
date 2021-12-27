import React from "react";

import { MaterialUIButton } from "./styles";
export const Button = ({ title, ...props }) => {
  return <MaterialUIButton>{title}</MaterialUIButton>;
};
