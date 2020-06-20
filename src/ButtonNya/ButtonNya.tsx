import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './ButtonNya.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
}

const ButtonNya: React.FC<ButtonNyaPropsType> = ({...props}) => {
    return (
        <div>
            <button className={s.btn}{...props}/>
        </div>
    )
}

export default ButtonNya