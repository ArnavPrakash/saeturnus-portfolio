import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className='card'>
        <div className='circle'></div>
        <div className='text'>
            <p className='heading'>{props.heading}</p>
            <p className='content'>{props.text}</p>
        </div>
      
    </div>
  )
}

export default Cards