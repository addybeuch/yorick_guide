import React, { useState, useEffect } from 'react'
import './difficulty.scss'
import Tippy from '@tippyjs/react'

const DifficultyRating = ({ matchup }) => {
  const [matchupLevel, setMatchupLevel] = useState(0)
  const [matchupColor, setMatchupColor] = useState('black')

  useEffect(() => {
    if (matchup.toLowerCase() === 'win') {
      setMatchupLevel(1)
      setMatchupColor('#4aff56')
    } else if (matchup.toLowerCase() === 'skill') {
      setMatchupLevel(2)
      setMatchupColor('#ffe138')
    } else if (matchup.toLowerCase() === 'lose') {
      setMatchupLevel(3)
      setMatchupColor('#f78e48')
    } else if (matchup === 'IMPOSSIBLE DONT DO IT') {
      setMatchupLevel(4)
      setMatchupColor('#f76248')
    } else {
      setMatchupLevel(0)
    }
  }, [matchup])

  return (
    <Tippy
      placement='right'
      content={<div style={{ color: matchupColor }}>{matchup}</div>}
      className='tooltip-container'
      appendTo={document.body}
    >
      <div className='matchup-container'>
        <div
          className={`${
            matchupLevel >= 1 ? 'win-matchup' : ''
          } rating-bar first`}
        ></div>
        <div
          className={`${matchupLevel >= 2 ? 'skill-matchup' : ''} rating-bar`}
        ></div>
        <div
          className={`${matchupLevel >= 3 ? 'lose-matchup' : ''} rating-bar`}
        ></div>
        <div
          className={`${
            matchupLevel >= 4 ? 'impossible-matchup' : ''
          } rating-bar`}
        ></div>
      </div>
    </Tippy>
  )
}

export default DifficultyRating
