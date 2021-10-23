import React from 'react'
import { connect } from 'react-redux'
import Champion from './Champion'
import champArray from './champArray'

const ChampList = (props) => {
  const { isLoading } = props

  if (isLoading) {
    return <h1>Loading Chapmion...</h1>
  }

  return (
    <div className='champListContainer'>
      {champArray.map((champ, index) => (
        <Champion key={index} champ={champ} />
      ))}
    </div>
  )
}

export default ChampList
