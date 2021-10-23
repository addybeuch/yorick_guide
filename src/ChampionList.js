import React, { useState } from 'react'
import Champion from './Champion'
import champArray from './champArray'
import Searchbar from './SearchBar'
import { useDebouncedState } from './hooks/useDebouncedState'

const ChampList = (props) => {
  const { isLoading } = props
  const [search, setSearch] = useState(''),
    debouncedSearch = useDebouncedState(search, 300)

  if (isLoading) {
    return <h1>Loading Chapmion...</h1>
  }

  return (
    <div className='champListContainer'>
      <Searchbar search={search} setSearch={setSearch} />
      {champArray
        .filter((champ) =>
          champ.name.toLowerCase().includes(debouncedSearch?.toLowerCase())
        )
        .map((champ, index) => (
          <Champion key={index} champ={champ} />
        ))}
    </div>
  )
}

export default ChampList
