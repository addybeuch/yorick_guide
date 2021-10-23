import React from 'react'

const Champion = (props) => {
  const { champ } = props

  return (
    <div className='card'>
      <h3 className='name'>{champ.name}</h3>
      <p className='counter'>{champ.counter}</p>
      <p className='runes'>{champ.runes}</p>
      <p className='items'>{champ.items}</p>
      <p className='difficulty'>{champ.difficulty}</p>
    </div>
  )
}

export default Champion
