import './App.css'
import ChampList from './ChampionList'
import background from './images/background.png'

function App() {
  return (
    <div classname='App'>
      <h1>Yorick Guide</h1>
      <ChampList />
      <img src={background} id='bg' alt='' />
    </div>
  )
}

export default App
