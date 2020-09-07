import React from 'react';
import {InputLabel} from "@material-ui/core";
import ControlledOpenSelect from "../../common/Select/SelectFromMaterialUI";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {switcherColorTheme} from "../../state/themeSwitcherReducer";
import styled, {ThemeProvider} from "styled-components";
import theme from 'styled-theming';

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
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  font-family: sans-serif;
  transition: 1s;
  
  background-color: ${backgroundColor};
  color: ${textColor};
`;

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

        // setSelectValue(event.currentTarget.value as string);
    };
    let optionElement = optionArr.map((el: any, i: number) => {
        return <option key={i} value={el.value}>{el.title}</option>
    })


    return (
        <>
            <h1>JuniorPlus</h1>
            <InputLabel id="demo-controlled-open-select-label">Theme switcher</InputLabel>
            <ControlledOpenSelect
                optionArr={optionArr}
                value={selectSwitch}
                handleChange={handleChange}
                optionElement={optionElement}
            />
        </>
    )
}
export default JuniorPlus
