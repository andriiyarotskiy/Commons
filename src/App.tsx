import React, {useState} from 'react';
import './App.css';
import InputNya from "./InputNya/InputNya";


function App() {

    let [error, setError] = useState<string>('')

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
            <InputNya onEnter={onEnter}
                      error={error}
                      clearInputAfterPress={clearInputAfterPress}/>
        </div>
    );
}

export default App;
