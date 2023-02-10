export const Card=(props)=>{
    return <div>
        <h3>Name: {props?.name}</h3>
        <img src={props?.image}></img>
        <h3>Type: {props?.type}</h3>
        <h3>Gender: {props?.gender}</h3>
        {/* <p>ok</p> */}
    </div>
}