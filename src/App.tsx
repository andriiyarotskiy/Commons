import React, {useState} from 'react';
import './App.css';
import InputNya from "./InputNya/InputNya";
import ButtonNya from "./ButtonNya/ButtonNya";


function App() {

    let [error, setError] = useState<string>('')


    const onEnterTest = () => {
        alert('Say hello')
    }


    /* const clearInputAfterPress = (title: string) => {
        if (!title) setError('')
    }*/
    // const onEnter = (title: string) => {
    //     if (title.trim() !== '') {
    //         alert('Hello ' + title.trim())
    //     } else {
    //         setError('Please add text to the form')
    //     }
    // }

    return (
        <div>
            <InputNya onEnter={onEnterTest} error={error}/>
            <ButtonNya>BTN</ButtonNya>
        </div>
    );
}

export default App;