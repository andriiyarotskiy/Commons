import React, {useState} from 'react';
import {InputLabel} from "@material-ui/core";
import ControlledOpenSelect from "../../common/Select/SelectFromMaterialUI";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {switcherColorTheme} from "../../state/themeSwitcherReducer";
import styled from "styled-components";
import theme from 'styled-theming';
import {Request} from "../Request/Request";
import Modal from '../../common/Modal/Modal';
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import InputNya from "../../common/InputNya/InputNya";


const optionArr = [
    {title: 'JET', value: 'jet'},
    {title: 'MING', value: 'ming'},
    {title: 'INDIGO', value: 'indigo'},
]

const JuniorPlus = () => {

    const selectSwitch = useSelector<RootStateType>(state => state.themeSwitcher.color)
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        if (e.currentTarget.value === 'jet') {
            dispatch(switcherColorTheme('jet'))
        } else if (e.currentTarget.value === 'ming') {
            dispatch(switcherColorTheme('ming'))
        } else if (e.currentTarget.value === 'indigo') {
            dispatch(switcherColorTheme('indigo'))
        }
    };
    let optionElement = optionArr.map((el: any, i: number) => {
        return <option key={i} value={el.value}>{el.title}</option>
    })

    //Modal
    const [modalActive, setModalActive] = useState(false)
    //Modal


    return (
        <>
            <h1>JuniorPlus</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <InputLabel id="demo-controlled-open-select-label">Theme switcher</InputLabel>
                    <ControlledOpenSelect
                        optionArr={optionArr}
                        value={selectSwitch}
                        handleChange={handleChange}
                        optionElement={optionElement}
                    />
                </div>
                <div>
                    <Request/>
                </div>
                <div style={{borderTop: "2px solid black", width: "100vw"}}></div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <form>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <InputNya/>
                            <InputNya/>
                                <ButtonNya>
                                    Send
                                </ButtonNya>
                        </div>
                    </form>
                </Modal>
                <div>
                    <ButtonNya onClick={() => setModalActive(true)}>
                        Modal
                    </ButtonNya>
                </div>
            </div>
        </>
    )
}
export default JuniorPlus;


export const backgroundColor = theme("theme", {
    jet: "#1A659E",
    ming: "#3C6E71",
    indigo: "#284B63"
});

export const textColor = theme("theme", {
    jet: "#fff",
    ming: "#EED7C5",
    indigo: "#EEE2DF"
});

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  font-family: sans-serif;
  transition: 1s;
  
  background-color: ${backgroundColor};
  color: ${textColor};
`;

