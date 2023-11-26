
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { useThemeValue } from "./themeContext";
import Styles from './styles.module.css';

export default function App() {
  const { theme } = useThemeValue();

  return (
    <div className={`${Styles.App} ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}
