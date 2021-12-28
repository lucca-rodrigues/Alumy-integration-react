import React from "react";
import { Banner } from "../Components/Banner";
import { Header } from "../Components/Header";
import { ClubContentProvider } from "../Contexts/useClubContent";
import { Home, Details } from "../Pages";

const TemplateHome = () => {
  return (
    <ClubContentProvider>
      <Header />
      <Banner />
      <Home />
    </ClubContentProvider>
  );
};
const TemplateDetails = () => {
  return <Details />;
};

export { TemplateHome, TemplateDetails };
