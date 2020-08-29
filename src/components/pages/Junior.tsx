import React, {ChangeEvent, useCallback, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../state/store';
import {setLoadingAC, StateType} from "../../state/juniorPageLoadingReducer";
import Range from "../../common/Range/Range";
import DoubleSlider from "../../common/Range/DoubleSlider/DoubleSlider";

type StateLocalStorageType = {
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

    const changeValueInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])
    const setStateCallBack = () => {
        saveState<StateLocalStorageType>("inputValue", {x: value}); // сохранение обьекта
    }
    const getStateCallBack = () => {
        const state: StateLocalStorageType = restoreState<StateLocalStorageType>("inputValue", {x: ''});
        setValue(state.x)
    }
    const changeStatus = useCallback((id: string) => {
        const newRadioArray = radio.map((r) => {
            if (r.id === id) {
                return {...r, status: true}
            } else {
                return {...r, status: false}
            }
        })
        setRadio(newRadioArray)
    }, [])


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
    const load = useSelector<RootStateType, StateType>(state => state.juniorPage)
    const dispatch = useDispatch()
    const startLoadingClickHandler = () => {
        dispatch(setLoadingAC(true)) // dispatch action
        setTimeout(dispatch, 3000, setLoadingAC(false))
    }
    // === 10 Task ===
    // === 11 Task ===
    const [rangeValue, setRangeValue] = useState('90')

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setRangeValue(e.currentTarget.value)
    }, [])

    const [doubleValue, setDoubleValue] = useState<number[]>([25, 75])
    const onChangeDoubleSliderHandler = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        setDoubleValue(newValue as number[])
    }

    // === 11 Task ===
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
                    <div className={s.styleTitleTasks}>Home work №11</div>
                    <Range value={rangeValue}
                           onChange={onChangeHandler}
                           minValue={"0"}
                           maxValue={"100"}
                    />
                    <DoubleSlider
                        onChange={onChangeDoubleSliderHandler}
                    />

                </>}
        </div>
    );
}

export default Junior;
