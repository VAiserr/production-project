import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button: FC<IButtonProps> = ( props ) => {
    const { className, children, ...other } = props;
    return (
        <button className={classNames(cls.Button, {}, [className])} {...other}>
            {children}
        </button>
    );
};