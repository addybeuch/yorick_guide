import './App.css'
import ChampList from './components/ChampionList'
import Item from './components/common/Item/Item'

function App() {
  return (
    <div className='guide'>
      <h1>Yorick Guide</h1>
      <Item name='hullBreaker' />
      <ChampList />
    </div>
  )
}

export default App
