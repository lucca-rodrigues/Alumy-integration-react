import React, { useState } from "react";
import { FacebookSelector } from "@charkour/react-reactions";

const ReactionsComponent = (wherever, onselect) => {
  const [selectedIcon, setSelectedIcon] = useState("");
  function HandleClick(e) {
    console.log("Selected:", e);
    console.log("wherever", wherever);
    eval(wherever.onselect);
  }

  return (
    <div className="facebook-actions">
      <FacebookSelector
        onSelect={(e) => {
          setSelectedIcon(e);
          HandleClick();
        }}
      />
      <p> {selectedIcon && `Selected Icon: ${selectedIcon}`}</p>
      <h1>Test build Webpack</h1>
      <p>{wherever?.wherever}</p>
    </div>
  );
};

export { ReactionsComponent };
