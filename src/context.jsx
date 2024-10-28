import { useState, useEffect, useContext, createContext } from "react";
const appContext = createContext();
const getInitialDarkMode = () => {
  /*
   * This function return the initial dark mode setting based on the user system preference(true/false) and local storage.
   */
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches; // true if dark mode is preferred, false otherwise
  const darkThemeStorage = localStorage.getItem("darkTheme") === "true"; // true if dark theme is stored in local storage, false otherwise
  return darkThemeStorage || prefersDarkMode; // returns the value from local storage or user system preference
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode()); // initial dark mode setting based on user system preference.
  const [searchWord, setSearchWord] = useState("dog"); // default search word and hook to update it.
  const toggleDarkTheme = () => {
    /*
     * This function toggles the dark theme between true/false, and updates the local storage accordingly.
     */
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme); // set the dark theme in local storage for next visit.
  };
  useEffect(() => {
    /*
     * This effect hook is used to update the class of the HTML when the user changes the theme from light to dark or vice versa.
     */
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
