import React, {useState} from 'react';
import './App.css';
import InputTask from "./components/InputTask/InputTask";
import {v1} from "uuid";


export type ArrType = {
    name: string
    id: string
}

const App = () => {
    const [arr, setArr] = useState<Array<ArrType>>([]) // хук для данных newObj


    let addName = (name: string) => {
        if (name) {
            let newObj = {name: name, id: v1()}
            let newArr = [...arr, newObj]
            setArr(newArr)
            console.log(newArr)
        }
    }

    return (
        <div>
            <InputTask arr={arr} addName={addName}/>
        </div>
    );
}

export default App;
