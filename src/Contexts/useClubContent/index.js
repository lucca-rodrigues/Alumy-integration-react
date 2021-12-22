import { useContext, createContext, useState } from "react";

const ClubContent = createContext({});

const ClubContentProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <ClubContent.Provider value={{ data }}>{children}</ClubContent.Provider>
  );
};
const useClubContent = () => {
  return useContext(ClubContent);
};

export { ClubContentProvider, useClubContent };
