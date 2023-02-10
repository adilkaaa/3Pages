import { useState } from "react"

export const Task =(props) =>{
    const [isCompleted,setIsCompleted] = useState(false);
    
    return <div style={{backgroundColor: isCompleted ? 'lightgreen':'lightpink', borderRadius:'9px'}}>
        <h3 >{props.name}</h3>
        <button  onClick={props.removeTask}>remove task</button>
        <button onClick={()=>{setIsCompleted(!props.isCompleted)}}>Complete</button>
    </div>
}