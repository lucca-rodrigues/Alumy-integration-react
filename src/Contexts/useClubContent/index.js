import React, { useContext, createContext, useState } from "react";
import {
  mockBanner,
  mockBigCarousel,
  mockRelateds,
  mockTrending,
} from "../../MocksApi";

const ClubContent = createContext({});

const ClubContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const bannersData = mockBanner;
  const relatedsData = mockRelateds;
  const trendingData = mockTrending;
  const customSizeCarouselData = mockBigCarousel;

  return (
    <ClubContent.Provider
      value={{
        bannersData,
        relatedsData,
        trendingData,
        customSizeCarouselData,
        loading,
        setLoading,
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
