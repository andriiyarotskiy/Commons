import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import s from './InputNya.module.css'
import ButtonNya from "../ButtonNya/ButtonNya";


export type InputNyaPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    {
        onEnter?: (title: string) => void,
        error?: string,
        clearInputAfterPress: (title: string) => void
    };
// добавил title: string чтоб в функции onEnter отображалось value

const InputNya: React.FC<InputNyaPropsType> = ({onEnter, error, ...props}) => {

    let [title, setTitle] = useState('')

    function addInputValue(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        props.clearInputAfterPress('')
        if (e.key === 'Enter') { // Нажатие на Enter запускает функцию OnEnter
            onEnter && onEnter(title) // вызов функции onEnter из другой компоненты через пропс
            setTitle('')
        }
    }

    const handleButtonClick = () => {
        onEnter && onEnter(title)
        setTitle('')
    }


    return (
        <>
            <div className={s.wrapperInput}>
                <input className={s.inputNya} {...props}
                       type="text"
                       value={title}
                       onChange={addInputValue}
                       onKeyPress={handleKeyPress}
                />
                <div className={s.error}>
                    <span>{error}</span>
                </div>
            </div>
            <ButtonNya nameBtn={'component button'}
                       funcClick={handleButtonClick}
            />
        </>

    );
};

export default InputNya;