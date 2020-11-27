import React from 'react';
import {FilterValuesType, TaskType} from "./Todolist";
import style from './Todoapp.module.css'
import ButtonNya from "../../common/ButtonNya/ButtonNya";


type PropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}


const Todoapp = (props: PropsType) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <div className={style.wrapper}>
                {
                    props.task.map(t => {
                            return <div className={style.container} key={t.id}>
                                <p>{t.title}</p>
                                <ButtonNya onClick={() => props.removeTask(t.id)}>remove</ButtonNya>
                            </div>
                        }
                    )
                }
            </div>
            <div className={style.wrapperBtn}>
                <ButtonNya
                    onClick={() => props.changeFilter('very bad')}>
                    <p>very bad</p>
                </ButtonNya>
                <ButtonNya
                    onClick={() => props.changeFilter('low')}>
                    <p>low</p>
                </ButtonNya>
                <ButtonNya
                    onClick={() => props.changeFilter('medium')}>
                    <p>medium</p>
                </ButtonNya>
                <ButtonNya
                    onClick={() => props.changeFilter('high')}>
                    <p>high</p>
                </ButtonNya>
                <ButtonNya
                    onClick={() => props.changeFilter('all')}>
                    <p>ALL</p>
                </ButtonNya>
            </div>
        </div>
    );
}

export default Todoapp;


