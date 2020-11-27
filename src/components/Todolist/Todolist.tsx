import React, {useState} from 'react';
// import style from './Todolist.module.css'
import Todoapp from "./Todoapp";


export type TaskType = {
    id: number
    title: string
}

export type FilterValuesType = 'low' | 'high' | 'medium' | 'very bad' | 'all'

const Todolist = () => {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'Work', priority: 'low'},
        {id: 2, title: 'Game', priority: 'high'},
        {id: 3, title: 'Lessons React', priority: 'medium'},
        {id: 4, title: 'Lessons Native JS', priority: 'low'},
        {id: 5, title: 'Family', priority: 'high'},
        {id: 6, title: 'Chill', priority: 'very bad'}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodoList = tasks;

    if (filter === 'low') {
        tasksForTodoList = tasks.filter(t => t.priority === 'low')
    }
    if (filter === 'high') {
        tasksForTodoList = tasks.filter(t => t.priority === 'high')
    }
    if (filter === 'medium') {
        tasksForTodoList = tasks.filter(t => t.priority === 'medium')
    }
    if (filter === 'very bad') {
        tasksForTodoList = tasks.filter(t => t.priority === 'very bad')
    }


    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    return (
        <div>
            <Todoapp
                title={"I'm so fool"}
                task={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default Todolist;