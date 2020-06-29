import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import PreJunior from "./components/pages/PreJunior";
import Junior from "./components/pages/Junior";
import JuniorPlus from "./components/pages/JuniorPlus";

function App() {

    return (
        <HashRouter>
            <div className={'app-wrapper'}>
                <Navbar/>
                <Route path="/prejunior" component={PreJunior} />
                <Route path="/junior" component={Junior} />
                <Route path="/juniorplus" component={JuniorPlus} />
            </div>
        </HashRouter>
    );
}

export default App;
