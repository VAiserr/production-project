import {classNames} from "shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'
import {FC} from "react";

export interface IAppLinkProps extends LinkProps{
    to: string;
    className?: string;
}

export const AppLink: FC<IAppLinkProps> = ( props ) => {
    const { className, children, ...other } = props;
    return (
        <Link {...other} className={classNames(cls.AppLink, {}, [className])}>
            {children}
        </Link>
    );
};