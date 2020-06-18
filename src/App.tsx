import React, {useState} from 'react';
import './App.css';
import InputNya from "./InputNya";
import ButtonNya from "./test/ButtonNya";


function App() {

    let [error, setError] = useState<string>('')

    const onEnter = (title: string) => {
        if (title.trim() !== '') {
            alert('Hello ' + title.trim())
        } else {
            setError('please add text to input')
        }
    }

    function clearInputAfterPress(title: string) {
        if (!title) {
            setError('')
        }
    }

    return (
        <div>
            <InputNya onEnter={onEnter}
                      error={error}
                      clearInputAfterPress={clearInputAfterPress}/>
            <ButtonNya/>
        </div>
    );
}

export default App;
