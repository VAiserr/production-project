import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): IUseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    }

    return {theme, toggleTheme};
}