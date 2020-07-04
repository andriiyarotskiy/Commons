import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../../common/EditableSpan/EditableSpan";
import s from "./Junior.module.css"
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import {saveState, restoreState} from "../../common/EditableSpan/FuncChangeSpan";

type StateType = {
    x: string
}

function Junior() {

    const [value, setValue] = useState('')

    function changeValueInput(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
    }

    const setStateCallBack = () => {
        saveState<StateType>("inputValue", {x: value}); // сохранение обьекта
    }

    const getStateCallBack = () => {
        const state: StateType = restoreState<StateType>("inputValue", {x: ''});
        setValue(state.x)
    }

    return (
        <>
            <h1>Junior</h1>
            <div className={s.middleEditable}>
                <ButtonNya onClick={setStateCallBack}>SAVE</ButtonNya>
                <ButtonNya onClick={getStateCallBack}>RESTORE</ButtonNya>
            </div>
            <div className={s.middleEditable}>
                <EditableSpan value={value} changeValueInput={changeValueInput}/>
            </div>
        </>
    );
}

export default Junior;
