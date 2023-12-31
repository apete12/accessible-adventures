import './Header.css'
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ returnAllParks }) => {
  return (
    <header className='header'>
      <div className='title-wrapper'>
        <div className='logo-container'>
          <Link
            to={`/`}
            onClick={returnAllParks}
            className='nav-link'
            id='return-home-link'
          >
            <img className='ally-logo' src={logo} alt='ally logo' />
          </Link>
        </div>
        <div className='title-container'>
          <h1>A11Y Adventures</h1>
        </div>
      </div>
      <div className='nav-wrapper'>
        <div className='return-btn-container' id='return-btn-container'>
          <NavLink
            to={`/`}
            onClick={returnAllParks}
            className='nav-link'
            id='return-home-link'
          >
            Home
          </NavLink>
          <NavLink
            to={`/national-parks`}
            onClick={returnAllParks}
            className='nav-link'
            id='return-home-link'
          >
            All Parks
          </NavLink>
          <NavLink
            to={`/saved-parks`}
            onClick={returnAllParks}
            className='nav-link'
            id='view-favorites-link'
          >
            Favorite Parks
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  returnAllParks: PropTypes.func
}
