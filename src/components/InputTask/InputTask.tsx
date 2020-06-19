import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {ArrType} from "../../App";


type InputTaskType = {
    arr: Array<ArrType>
    addName: (name: string) => void
}

const InputTask = (props: InputTaskType) => {

    const [name, setName] = useState('') // Хук для инпута

    function sayHello(name: string) {
        if (name) alert("Hello " + name)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.charCode === 13) {
            props.addName(name)
            sayHello(name)
            setName('') // Очищаю инпут после ввода
        }
    }

    const handleClickPress = () => {
        props.addName(name)
        sayHello(name)
        setName('') // Очищаю инпут после ввода
    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={name}
                onChange={changeInputValue}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClickPress}>
                +
            </button>
            <span>{props.arr.length}</span>
        </div>
    )
}


export default InputTask;
