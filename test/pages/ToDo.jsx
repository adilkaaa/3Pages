import { useState } from "react";
import { Task } from "../components/Task";

export const ToDo =()=>{
    const [toDoList, setToDoList]= useState([]);
    const [newTask, setNewTask] =useState('');
    const handleTask =(event) =>{
        setNewTask(event.target.value);
    }
    const addTask =(task) =>{
        const len = toDoList.length
        const newToDoList = [...toDoList,{id: len==0 ? 0 : toDoList[len-1].id+1,
        name: task,isCompleted:false}]
        setToDoList(newToDoList)
    }
    const removeTask =(id) =>{
        const newToDoList = toDoList.filter((task)=>{
            return id!==task.id
        })
        setToDoList(newToDoList)
    }
    return (
        <div className="to-do">
            <input placeholder="write task" onChange={handleTask}/>
            <button onClick={()=>addTask(newTask)}>Add Task</button>

            <div className="toDoList">
                {toDoList.map((task)=>{
                    return <Task name={task.name} removeTask={()=>removeTask(task.id)} isCompleted={task.isCompleted}/>
                })}
            </div>
        </div>
    )
}