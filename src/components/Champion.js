import React from 'react'
import DifficultyRating from './common/DifficultyRating/DifficultyRating'

const Champion = (props) => {
  const { champ } = props

  return (
    <div className='card'>
      <h3 className='name'>{champ.name}</h3>
      <DifficultyRating matchup={champ.matchup} />
      <p className='runes'>{champ.runes}</p>
      <p className='items'>{champ.items}</p>
      <p className='difficulty'>{champ.difficulty}</p>
      <p className='comment'>{champ.comment}</p>
    </div>
  )
}

export default Champion
