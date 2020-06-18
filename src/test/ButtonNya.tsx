import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonNya: React.FC<ButtonNyaPropsType> = () => {

    return (
        <div>
            <button>btn</button>
        </div>
    )
}

export default ButtonNya