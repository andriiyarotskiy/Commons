import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './ButtonNya.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    nameBtn?: string // Типизация имени кнопки
}

const ButtonNya: React.FC<ButtonNyaPropsType> = ({ ...props}) => {
    return (
        <div>
            <button className={s.btn}{...props}
            >{props.nameBtn}</button>
        </div>
    )
}

export default ButtonNya