import React, {useState} from 'react';
import './App.css';
import InputTask from "./components/InputTask/InputTask";
import {v1} from "uuid";
import Mymessage from "./components/Message/Mymessage";
import Todolist from "./components/Todolist/Todolist";


export type ArrType = {
    name: string
    id: string
}

function App() {

    let [error, setError] = useState<string>('')
    let [arr, setArr] = useState<Array<ArrType>>([]) // хук для данных newObj


    let addName = (name: string) => {
        if (name) {
            let newObj = {name: name, id: v1()}
            let newArr = [...arr, newObj]
            setArr(newArr)
        }
    }

    const onEnter = (title: string) => {
        if (title.trim() !== '') {
            alert('Hello ' + title.trim())
        } else {
            setError('Please add text to the form')
        }
    }

    const clearInputAfterPress = (title: string) => {
        if (!title) setError('')
    }

    return (
        <div className={'app-wrapper'}>
            <Mymessage/>
            <Todolist/>
            <InputTask
                arr={arr}
                addName={addName}
                onEnter={onEnter}
                error={error}
                clearInputAfterPress={clearInputAfterPress}
            />
        </div>
    );
}

export default App;
