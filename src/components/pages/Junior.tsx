import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../../common/EditableSpan/EditableSpan";
import s from "./Junior.module.css"
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import {saveState, restoreState} from "../../common/EditableSpan/FuncChangeSpan";
import Select from "../../common/Select/Select";
import {v1} from "uuid";
import Radio from "../../common/Radio/Radio";

type StateType = {
    x: string
}

export type OptionValueType = {
    id: string,
    title: string
}
export type RadioTypeArr = {
    id: string
    name: string
    value: string
    status: boolean
}

const optionValue = [
    {id: v1(), title: 'REACT'},
    {id: v1(), title: 'REDUX'},
    {id: v1(), title: 'JAVASCRIPT'},
]

function Junior() {

    const [value, setValue] = useState('Enter value for save')

    const [selected, setSelected] = useState('REDUX')

    const [radio, setRadio] = useState([
            {id: v1(), name: 'radio', value: 'one', status: false},
            {id: v1(), name: 'radio', value: 'two', status: true},
            {id: v1(), name: 'radio', value: 'three', status: false},
        ]
    )


    const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const setStateCallBack = () => {
        saveState<StateType>("inputValue", {x: value}); // сохранение обьекта
    }
    const getStateCallBack = () => {
        const state: StateType = restoreState<StateType>("inputValue", {x: ''});
        setValue(state.x)
    }

    const changeStatus = (id: string) => {
        const newRadioArray = radio.map((r) => {
            if (r.id === id) {
                return {...r, status: true}
            } else {
                return {...r, status: false}
            }
        })
        setRadio(newRadioArray)
    }

    return (
        <>
            <h1>Junior</h1>

            <div className={s.middleEditable}>
                <EditableSpan value={value} changeValueInput={changeValueInput}/>
            </div>

            <div className={s.middleEditable}>
                <ButtonNya onClick={setStateCallBack}>SAVE</ButtonNya>
                <ButtonNya onClick={getStateCallBack}>RESTORE</ButtonNya>
            </div>

            <div style={{textAlign: "center"}}>
                <Select optionValue={optionValue}
                        title={selected}
                        setSelected={setSelected}
                />
                <Radio
                    radioArr={radio}
                    changeStatus={changeStatus}
                />
            </div>


        </>
    );
}

export default Junior;
