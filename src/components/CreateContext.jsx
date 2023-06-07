import { createContext, useState } from "react";
import data from "../../data.json";
export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <CountryContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </CountryContext.Provider>
  );
};
