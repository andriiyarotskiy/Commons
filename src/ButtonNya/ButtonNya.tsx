import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './ButtonNya.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    funcClick: () => void // Типизация функции клика
    nameBtn: string // Типизация имени кнопки
}

const ButtonNya: React.FC<ButtonNyaPropsType> = ({funcClick, ...props}) => {
    return (
        <div>
            <button
                className={s.btn}
                onClick={funcClick}
            >{props.nameBtn}
            </button>
        </div>
    )
}

export default ButtonNya