import React, { useContext, createContext, useState } from "react";

const ClubContent = createContext({});

const ClubContentProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Like",
      icon: "👍",
      onselect: "console.log('Like')",
    },
    {
      id: 2,
      name: "Love",
      icon: "❤️",
      onselect: "console.log('Love')",
    },
  ]);

  return (
    <ClubContent.Provider value={{ clubData: data }}>
      {children}
    </ClubContent.Provider>
  );
};
const useClubContent = () => {
  return useContext(ClubContent);
};

export { ClubContentProvider, useClubContent };
