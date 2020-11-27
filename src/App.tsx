import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import PreJunior from "./components/pages/PreJunior";
import Junior from "./components/pages/Junior";
import JuniorPlus, {ContainerStyled} from "./components/pages/JuniorPlus";
import Menu from "./components/Navbar/Menu/Menu";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {RootStateType} from "./state/store";

function App() {
    const selectSwitch = useSelector<RootStateType>(state => state.themeSwitcher.color)
    return (
        <HashRouter>
            <ThemeProvider theme={{theme: selectSwitch}}>
                <ContainerStyled>
                    <div className={'app-wrapper'}>
                        <Menu/>
                        <Route path="/prejunior" component={PreJunior}/>
                        <Route path="/junior" component={Junior}/>
                        <Route path="/juniorplus" component={JuniorPlus}/>
                    </div>
                </ContainerStyled>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
