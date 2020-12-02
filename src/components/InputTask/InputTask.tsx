import React, {useState, ChangeEvent} from "react";
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import InputNya from "../../common/InputNya/InputNya";
import s from "./InputTask.module.css"
import {ArrType} from "../pages/PreJunior";


type InputTaskType = {
    arr: Array<ArrType>
    addName: (name: string) => void
    onEnter: (name: string) => void
    error: string
    clearInputAfterPress: (name: string) => void
}

const InputTask = (props: InputTaskType) => {

    const [name, setName] = useState('') // Хук для инпута

    const handleKeyPress = () => {
        props.onEnter(name)
        props.addName(name) // функция для добавления имени и отображения в спане к-ства обьектов
        setName('') // Очищаю инпут после ввода
    }

    const handleClickPress = () => {
        props.onEnter(name)
        props.addName(name) //функция для добавления имени и отображения в спане к-ства обьектов
        setName('') // Очищаю инпут после ввода
    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return (
        <div className={s.wrapperInputtask}>
            <div><InputNya value={name}
                           onChange={changeInputValue}
                           onEnter={handleKeyPress}
                           error={props.error}
                           clearInputAfterPress={() => props.clearInputAfterPress(name)}
            /></div>
            <div><ButtonNya onClick={handleClickPress}>BTN</ButtonNya></div>
            <span>{props.arr.length}</span>
        </div>
    )
}


export default InputTask;
