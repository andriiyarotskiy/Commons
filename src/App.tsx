import React, {useState} from 'react';
import {v1} from "uuid";
import './App.css';
import InputTask from "./components/InputTask/InputTask";


export type ArrType = {
    name: string
    id: string
}

function App() {

    let [error, setError] = useState<string>('')

    const [arr, setArr] = useState<Array<ArrType>>([]) // хук для данных newObj


    let addName = (name: string) => {
        if (name) {
            let newObj = {name: name, id: v1()}
            let newArr = [...arr, newObj]
            setArr(newArr)
            console.log(newArr)
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
        <div>
            <InputTask arr={arr} addName={addName}/>
            {/*<InputNya onEnter={onEnter}*/}
            {/*          error={error}*/}
            {/*          clearInputAfterPress={clearInputAfterPress}/>*/}
        </div>
    );
}

export default App;
