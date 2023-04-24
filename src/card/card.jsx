import React from 'react'
import "./card.css";

function Card(props) {
  return (
    
    <div className='card'>
      <img src={props.cardContent.image} />
      <h3>  {props.cardContent.name}</h3>
      <p>{props.cardContent.description}</p>
   
    </div>
  )
}

export default Card
