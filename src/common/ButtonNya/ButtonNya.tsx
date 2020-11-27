import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './ButtonNya.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {}

const ButtonNya: React.FC<ButtonNyaPropsType> = React.memo(({...props}) => {
    return (
            <button className={s.btn}{...props}/>
    )
})

export default ButtonNya