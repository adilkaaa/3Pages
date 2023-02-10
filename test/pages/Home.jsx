import { useState } from 'react'
import { Card } from '../components/Card'

export const Home =()=>{
    const [id, setId] = useState(0)
    const handleId = (event)=>{
      setId(event.target.value)
    }
    const [api, setApi] = useState(null);
    const fetchApi =(id) =>{
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response)=>response.json()).then((data)=>{
      console.log(data);  
      setApi(data);
      })
    }
    return <div>
        <input placeholder='enter number of character...'onChange={handleId}/>
        <button onClick={()=>fetchApi(id)}>Show</button>
        {api!=null ? <Card name={api?.name} image={api?.image} gender={api?.gender} type={api?.gender} /> :<h3>Please, Try This </h3>}
    </div>
}