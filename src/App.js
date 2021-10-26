import './App.scss'
import ChampList from './components/ChampionList'
import Item from './components/common/Item/Item'
import MainHeader from './components/MainHeader'

function App() {
  return (
    <div>
      <MainHeader />
      <Item name='hullBreaker' />
      <ChampList />
    </div>
  )
}

export default App
