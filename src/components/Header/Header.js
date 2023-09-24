import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

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
        <div className='return-btn-container' id='return-btn-container'>
          <NavLink to={`/`} onClick={returnAllParks} className='nav-link' id='return-home-link'>
            All Parks
          </NavLink>
          <NavLink to={`/saved-parks`} onClick={returnAllParks} className='nav-link' id='view-favorites-link'>
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
};