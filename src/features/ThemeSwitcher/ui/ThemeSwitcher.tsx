import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/theme-light.svg';
import DarkIcon from 'shared/assets/theme-dark.svg';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {Button} from "shared/ui/Button/Button";

export interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ( { className }: IThemeSwitcherProps ) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {
                theme == Theme.LIGHT ? <DarkIcon /> : <LightIcon />
            }
        </Button>
    );
};