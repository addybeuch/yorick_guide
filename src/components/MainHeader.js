import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div className='header-container'>
      <h1>Yorick Guide</h1>
      <div className='link-container-header'>
        <Link className='navLink' to='/champions'>
          Matchups
        </Link>
        <Link className='navLink' to='/yorick'>
          Yorick Info
        </Link>
      </div>
      <div className='header-img' />
    </div>
  )
}

export default MainHeader
