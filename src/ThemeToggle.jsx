import { useAppContext } from "./context";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoMdSunny className="toggle-icon" />
        ) : (
          <IoMdMoon className="toggle-icon" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
