import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = ({returnAllParks}) => {
  return (
    <header className='header'>
      <div className='title-wrapper'>
        <div className='logo-container'>
          <img className='ally-logo' src={logo} alt='ally logo' />
        </div>
        <div className='title-container'>
          <h1>a11y adventures</h1>
        </div>
      </div>
      <div className='nav-wrapper'>
        <div className='return-btn-container'>
          <Link to={`/`} onClick={returnAllParks} className='return-all-parks'>
            All Parks
          </Link>
          <Link to={`/saved-parks`} onClick={returnAllParks} className='return-all-parks'>
            Favorite Parks
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
