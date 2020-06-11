import React, {useState} from "react";


const InputTask = (props: any) => {

    const [name, setName] = useState('') // Хук для инпута

    function sayHello(name: string) {
        if (name) {
            alert("Hello " + name)
        }
    }

    return (
        <div>
            <input value={name}
                   onChange={(e) => {
                       setName(e.currentTarget.value)
                   }}
                   onKeyPress={(e) => {
                       if (e.charCode === 13) {
                           props.addName(name)
                           sayHello(name)
                           setName('')
                       }
                   }}
            />
            <button onClick={(e) => {
                props.addName(name)
                sayHello(name)
                setName('') // Очищаю инпут после ввода
            }}>+
            </button>
            <span>{props.arr.length}</span>
        </div>
    )
}


export default InputTask;