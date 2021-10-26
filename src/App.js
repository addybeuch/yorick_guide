import './App.scss'
import ChampList from './components/ChampionList'
import Item from './components/common/Item/Item'
import Resolve from './components/common/Runes/resolveTree'
import MainHeader from './components/MainHeader'


function App() {
  return (
    <div>
      <MainHeader />
      <Item name='hullBreaker' />
      <Resolve />
      <ChampList />
    </div>
  )
}

export default App
