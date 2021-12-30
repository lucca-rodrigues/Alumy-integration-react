import React from "react";

import { MaterialUIButton } from "./styles";
const Button = ({ title, ...props }) => {
  return (
    <MaterialUIButton warning={props.warning}>
      {props.icon && <span className="icon_button">{props.icon}</span>}
      {title}
    </MaterialUIButton>
  );
};

export { Button };
