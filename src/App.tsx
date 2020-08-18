import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import PreJunior from "./components/pages/PreJunior";
import Junior from "./components/pages/Junior";
import JuniorPlus from "./components/pages/JuniorPlus";
import Menu from "./components/Navbar/Menu/Menu";

function App() {

    return (
        <HashRouter>
            <div className={'app-wrapper'}>
                <Menu/>
                <Route path="/prejunior" component={PreJunior}/>
                <Route path="/junior" component={Junior}/>
                <Route path="/juniorplus" component={JuniorPlus}/>
            </div>
        </HashRouter>
    );
}

export default App;
