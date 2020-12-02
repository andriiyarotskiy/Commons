import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import FirstPage from "./components/pages/PreJunior";
import SecondPage from "./components/pages/Junior";
import ThirdPage, {ContainerStyled} from "./components/pages/JuniorPlus";
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
                        <Route path="/page1" component={FirstPage}/>
                        <Route path="/page2" component={SecondPage}/>
                        <Route path="/page3" component={ThirdPage}/>
                    </div>
                </ContainerStyled>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
