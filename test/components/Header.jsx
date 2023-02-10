import { Link } from "react-router-dom"
import { ToDo } from "../pages/ToDo"
export const Header =()=>{
    return <div style={{display:"flex", justifyContent: "space-between", backgroundColor:'lightblue'}}>
        <Link to='/'>Home</Link>
        <Link to='/to-do'>To Do</Link>
        <Link to='/sign-up'>Sign Up</Link>
    </div>
}