import React, {useState, ChangeEvent} from "react";
import {ArrType} from "../../App";
import ButtonNya from "../../ButtonNya/ButtonNya";
import InputNya from "../../InputNya/InputNya";


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
        <div>
            <InputNya value={name}
                      onChange={changeInputValue}
                      onEnter={handleKeyPress}
                      error={props.error}
                      clearInputAfterPress={() => props.clearInputAfterPress(name)}
            />
            <ButtonNya onClick={handleClickPress}>BTN</ButtonNya>
            <span>{props.arr.length}</span>
        </div>
    )
}


export default InputTask;
