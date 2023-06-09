import { createContext, useContext, useState } from "react";

const PageContext = createContext();
export const PageSwitchContext = createContext();

export const usePage = () => {
  return useContext(PageContext);
};

export const usePageSwitch = () => {
  return useContext(PageSwitchContext);
};

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("Home");

  const switchPage = (currentPage) => {
    setActivePage(currentPage);
  };

  return (
    <PageContext.Provider value={activePage}>
      <PageSwitchContext.Provider value={switchPage}>
        {children}
      </PageSwitchContext.Provider>
    </PageContext.Provider>
  );
};
