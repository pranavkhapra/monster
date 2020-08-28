import React from 'react'
import './CardList.css'
import CardLook from './CardLook'

function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map((monster=>(
                <CardLook key={monster.id} name={monster.name} email={monster.email}/>
            )))}
        </div>
    )
}

export default CardList
