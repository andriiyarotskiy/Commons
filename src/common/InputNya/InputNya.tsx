import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from './InputNya.module.css'


export type InputNyaPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    {
        onEnter?: () => void,
        error?: string,
        clearInputAfterPress?: () => void
    };

const InputNya: React.FC<InputNyaPropsType> = React.memo(({onEnter, error, ...props}) => {


    const handleKeyPress = (e: KeyboardEvent) => {
        props.clearInputAfterPress && props.clearInputAfterPress() // Вызoв хук из компоненты App чтоб очистить инпут после press
        if (e.key === 'Enter') { // Нажатие на Enter запускает функцию OnEnter
            onEnter && onEnter() // вызов функции onEnter из другой компоненты через пропс
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <input className={s.inputNya} {...props}
                       type="text"
                       onKeyPress={handleKeyPress}
                       placeholder={error}
                />
            </div>
            <div className={s.error}>{error}</div>
        </div>

    );
});

export default InputNya;