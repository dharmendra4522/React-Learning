import React from 'react'

const Card = ({cardData}) => {
  return (
    <div className='card' style={{width: '18rem'}}>
        <img src={cardData.image} alt={cardData.title} style={{height: '10rem'}}/>
        <div>
            <h5>{cardData.title}</h5>
            <p>{cardData.description}</p>
        </div>
    </div>
  )
}

export default Card