import React, { useContext, createContext, useState, useEffect } from "react";
import {
  mockBanner,
  mockBigCarousel,
  mockRelateds,
  mockTrending,
} from "../../MocksApi";

const ClubContent = createContext({});

const ClubContentProvider = ({
  children,
  dataMockBanner,
  dataTest,
  userName,
}) => {
  const [loading, setLoading] = useState(true);
  const bannersData = dataMockBanner ?? mockBanner;
  const relatedsData = mockRelateds;
  const trendingData = mockTrending;
  const customSizeCarouselData = mockBigCarousel;

  useEffect(() => {
    console.log("dataTest", dataTest);
  }, [dataTest]);

  return (
    <ClubContent.Provider
      value={{
        bannersData,
        relatedsData,
        trendingData,
        customSizeCarouselData,
        loading,
        setLoading,
        loggedUserName: userName,
      }}
    >
      {children}
    </ClubContent.Provider>
  );
};
const useClubContent = () => {
  return useContext(ClubContent);
};

export { ClubContentProvider, useClubContent };
