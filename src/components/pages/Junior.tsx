import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../../common/EditableSpan/EditableSpan";
import s from "./Junior.module.css"
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import {saveState, restoreState} from "../../common/EditableSpan/FuncChangeSpan";
import Select from "../../common/Select/Select";
import {v1} from "uuid";
import Radio from "../../common/Radio/Radio";
import {filteredAgeAC, hwReducer, sortDownAC, sortUpAndDownAC} from "../../state/homeWorkReducer";
import moment from "moment";
import PreLoader from "../../common/PreLoader/PreLoader";
import {juniorPageLoadingReducer, setLoadingAC} from '../../state/juniorPageLoadingReducer';

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

    const styleJunior: React.CSSProperties = {
        fontSize: "30px",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "20px"
    }
    // const styleTitleTasks: React.CSSProperties = {
    //     fontSize: "20px",
    //     textAlign: "center",
    //     fontWeight: "bold",
    //     padding: "30px"
    // }

    // === 6 Task hook ===
    const [value, setValue] = useState('Enter value for save')
    // === 7 Task hook===
    const [selected, setSelected] = useState('REDUX')
    const [radio, setRadio] = useState([
        {id: v1(), name: 'radio', value: 'one', status: false},
        {id: v1(), name: 'radio', value: 'two', status: true},
        {id: v1(), name: 'radio', value: 'three', status: false},
    ])

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


    // === 8 Task ===
    const [people, setPeople] = useState([
        {id: '1', name: 'Vika', age: 10},
        {id: '2', name: 'Sveta', age: 18},
        {id: '3', name: 'Valera', age: 17},
        {id: '4', name: 'Ira', age: 35},
        {id: '5', name: 'Ignat', age: 25},
        {id: '6', name: 'Alina', age: 50},
    ])

    const onClickSortUp = () => {
        setPeople(hwReducer(people, sortUpAndDownAC('up')))
    }
    const onClickSortDown = () => {
        setPeople(hwReducer(people, sortDownAC('down')))
    }
    const onClickSortByAge = () => {
        setPeople(hwReducer(people, filteredAgeAC(18)))
    }
    // === 8 Task ===

    // === 9 Task ===
    const [timerId, setTimerId] = useState(0);
    const [date, setDate] = useState(moment().format('HH:mm:ss'));
    const startDateOnClick = () => {
        let idInterval: any = setInterval(() => { // ANY   ?????????????
            let newDateADD = moment().format('HH:mm:ss')
            setDate(newDateADD)
        }, 1000)
        setTimerId(idInterval)
    }
    const stopPrevTime = () => {
        clearInterval(timerId); // останавливает предыдущий таймер
        const timer_id: any = setInterval(() => setDate(moment().format('HH:mm:ss')), 1000);
        setTimerId(timer_id);
    }
    const FullDate = moment().format('LLLL')
    // === 9 Task ===
    // === 10 Task ===
    const [load, setLoad] = useState({loading: false})
    const startLoadingClickHandler = () => {
        setLoad(juniorPageLoadingReducer(load, setLoadingAC(true)))
        setTimeout(setLoad, 3000, juniorPageLoadingReducer(load, setLoadingAC(false)))
    }
    // === 10 Task ===
    return (
        <div className={s.juniorPage}>
            {load.loading
                ? <div style={styleJunior}><PreLoader/></div>
                : <>
                    <p style={styleJunior}>Junior</p>
                    <div className={s.styleTitleTasks}>Home work №6</div>
                    <div className={s.middleEditable}>
                        <EditableSpan value={value} changeValueInput={changeValueInput}/>
                    </div>
                    <div className={s.middleEditable}>
                        <ButtonNya onClick={setStateCallBack}>SAVE</ButtonNya>
                        <ButtonNya onClick={getStateCallBack}>RESTORE</ButtonNya>
                    </div>
                    <div className={s.styleTitleTasks}>Home work №7</div>
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


                    <div className={s.styleTitleTasks}>Home work №8</div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        {people.map(man => {
                            return <p key={man.id}
                                      style={{padding: "15px"}}>
                                {man.name} : {man.age}
                            </p>
                        })}
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <ButtonNya onClick={onClickSortUp}>Sort Up</ButtonNya>
                        <ButtonNya onClick={onClickSortDown}>Sort Down</ButtonNya>
                        <ButtonNya onClick={onClickSortByAge}>Sort Age</ButtonNya>
                    </div>

                    <div className={s.homeWorkNine__wrapper}>Home work №9</div>
                    <div className={s.homeWorkNine}>
                        <div className={s.block}>
                            <div className={s.blockHidden}>{FullDate}</div>
                            <div className={s.blockVisible}>{date}</div>
                        </div>
                        <div>ID интервала : {timerId}</div>
                        <ButtonNya onClick={startDateOnClick}>Start Timer</ButtonNya>
                        <ButtonNya onClick={stopPrevTime}>Stop Prev Timer</ButtonNya>
                        <ButtonNya onClick={() => clearInterval(timerId)}>Stopping time update</ButtonNya>
                    </div>
                    <div className={s.styleTitleTasks}>Home work №10</div>
                    <ButtonNya onClick={startLoadingClickHandler}>start loading</ButtonNya>
                </>}
        </div>
    );
}

export default Junior;
