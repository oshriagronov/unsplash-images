import { useState, useEffect, useContext, createContext } from "react";
const appContext = createContext();
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const darkThemeStorage = localStorage.getItem("darkTheme") === "true";
  return darkThemeStorage || prefersDarkMode;
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchWord, setSearchWord] = useState("dog");
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <appContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchWord, setSearchWord }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext);
