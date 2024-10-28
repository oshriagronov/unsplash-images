import { useAppContext } from "./context";
import { IoMdMoon } from "react-icons/io"; // Import Moon icon
import { IoMdSunny } from "react-icons/io"; // Import Sun icon

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext(); // Access context values
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {" "}
        {/* change the theme of the site, switch between dark mode and light mode and replace the icons of the button accordingly(change the value using hook from the global context) */}
        {isDarkTheme ? (
          <IoMdMoon className="toggle-icon" />
        ) : (
          <IoMdSunny className="toggle-icon" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
