import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonNya: React.FC<ButtonNyaPropsType> = () => {

    return (
        <div>
            <button onClick={() => {alert('yo')}}>btn</button>
        </div>
    )
}

export default ButtonNya