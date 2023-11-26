import { useLanguageValue } from "./languageContext";
import { useThemeValue } from "./themeContext";
import styles from './styles.module.css'
export const Navbar = () => {
  const { theme, setTheme } = useThemeValue();
  const { language } = useLanguageValue();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={styles.navbar}>
      <span>Dialecto</span>
      <div className={styles.right}>
        <button onClick={changeTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
