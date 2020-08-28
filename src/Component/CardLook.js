import React from 'react'
import './CardLook.css'
function CardLook(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.key}?set=set2`} alt="monster"></img>
         <h1>{props.name}</h1>
        
         {props.email}
         </div>
    )
}

export default CardLook
