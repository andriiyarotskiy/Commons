import React, {useState} from 'react';
import './App.css';
import Todo from "./components/Todolist";
import InputTask from "./components/InputTask/InputTask";
import {v1} from "uuid";
import {log} from "util";


export type ArrType = {
    name: string
    id: string
}

const App = () => {
    const [arr, setArr] = useState([]) // хук для данных newObj


    let addName = (name: string) => {
        if (name) {
            let newObj = {name: name, id: v1()}
            let newArr: any = [...arr, newObj]  // <= хз как без any
            setArr(newArr)
            console.log(newArr)
        }
    }

    return (
        <div>
            {/*<Todo />*/}
            <InputTask arr={arr} addName={addName}/>
        </div>
    );
}

export default App;
