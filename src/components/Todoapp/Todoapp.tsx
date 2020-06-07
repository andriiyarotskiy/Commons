import React from 'react';
import {FilterValuesType, TaskType} from "../Todolist";
import style from './Todoapp.module.css'


type PropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}


const Todoapp = (props: PropsType) => {
    const styleForBtn = `${style.button} ${style.button2}`

    return (
        <div>
            <h1>{props.title}</h1>
            <div className={style.wrapper}>
                {
                    props.task.map(t => {
                            return <div className={style.container} key={t.id}>{t.title}
                                <button className={styleForBtn} onClick={() => props.removeTask(t.id)}>remove</button>
                            </div>
                        }
                    )
                }
            </div>
            <div  className={style.wrapperBtn}>
                <button className={styleForBtn}
                        onClick={() => props.changeFilter('very bad')}>
                    very bad
                </button>
                <button className={styleForBtn}
                        onClick={() => props.changeFilter('low')}>
                    low
                </button>
                <button className={styleForBtn}
                        onClick={() => props.changeFilter('medium')}>
                    medium
                </button>
                <button className={styleForBtn}
                        onClick={() => props.changeFilter('high')}>
                    high
                </button>
                <button className={styleForBtn}
                        onClick={() => props.changeFilter('all')}>
                    ALL
                </button>
            </div>
        </div>
    );
}

export default Todoapp;


// <button>X</button>