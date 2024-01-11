import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "features/ThemeSwitcher";

export interface INavbarProps {
    className?: string;
}

export const Navbar = ( { className }: INavbarProps ) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <nav className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={"/about"}>О Нас</AppLink>
            </nav>
        </div>
    );
};