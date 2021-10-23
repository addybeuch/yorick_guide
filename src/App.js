import './App.css'
import ChampList from './components/ChampionList'
import background from './images/background.png'

function App() {
  return (
    <div className='App'>
      <h1>Yorick Guide</h1>
      <ChampList />
      <img src={background} id='bg' alt='' />
    </div>
  )
}

export default App
