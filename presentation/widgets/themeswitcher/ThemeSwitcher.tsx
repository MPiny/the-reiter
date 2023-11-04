import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const handleOnChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light' );
    }
    
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                name="theme-switcher"
                id="theme-switcher"
                checked={ theme === 'dark' }
                onChange={handleOnChange}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    );
}