import React from 'react'

const Champion = (props) => {
  const { champ } = props

  return (
    <div className='card'>
      <h3 className='name'>{champ.name}</h3>
      <p className='matchup'>{champ.matchup}</p>
      <p className='runes'>{champ.runes}</p>
      <p className='items'>{champ.items}</p>
      <p className='difficulty'>{champ.difficulty}</p>
      <p className='comment'>{champ.comment}</p>
    </div>
  )
}

export default Champion
