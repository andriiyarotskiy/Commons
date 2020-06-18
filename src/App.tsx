import React, {useState} from 'react';
import './App.css';
import InputNya from "./InputNya";


function App() {

    let [error, setError] = useState<string>('')

    const onEnter = (title: string) => {
        if (title.trim() !== '') {
            alert('Hello ' + title.trim())
        } else {
            setError('please add text to input')
        }
    }

    return (
        <div>
            <InputNya onEnter={onEnter} error={error}/>
        </div>
    );
}

export default App;
