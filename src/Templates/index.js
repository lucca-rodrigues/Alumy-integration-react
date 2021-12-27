import React from "react";
import { ClubContentProvider } from "../Contexts/useClubContent";
import { Home, Details } from "../Pages";

const TemplateHome = () => {
  return (
    <ClubContentProvider>
      <Home />
    </ClubContentProvider>
  );
};
const TemplateDetails = () => {
  return <Details />;
};

export { TemplateHome, TemplateDetails };
