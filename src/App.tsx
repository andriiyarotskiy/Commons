import React from 'react';
import './App.css';
import Message from "./components/Message";
import User from "./components/User";


function App() {
    return (
        <div className="message">
            <User
                logo={"https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg"}/>
            <div className="message__text">
                <div className="message__text-inner">
                    <div className="text">
                        <User name={"Яроцкий Андрей"}/>
                        <Message text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamu "}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
