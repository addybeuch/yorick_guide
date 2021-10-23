import React from 'react'

const Searchbar = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search a matchup'
      />
    </div>
  )
}

export default Searchbar
