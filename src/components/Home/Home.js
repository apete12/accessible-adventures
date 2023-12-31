import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='ally'>
        <h2>a11y stands for accessibility.</h2>
        <p>
          It is a numeronym, with 11 representing the count of letters between
          the letter a and the letter y.{' '}
          <Link
            to={
              'https://www.a11yproject.com/about/#:~:text=%E2%80%9C%20a11y%20%E2%80%9D%20stands%20for%20%E2%80%9Caccessibility,World%20War%202)%2C%20etc.'
            }
            className='site'
          >
            Sited from The a11y Project
          </Link>
        </p>

        <img className='ally-logo' src={logo} alt='' />
        <p className='description'>
          A11Y Adventures was developed on the foundation of accessibility and
          inclusivity. Leveraging the National Park API, A11Y Adventures
          provides a platform to review and explore National Parks across the
          United States that offer accessible amenities. A11Y Adventures aims to
          provide park goers with as much information as possible in order to
          facilitate an enjoyable, safe, and accessible adventure.
        </p>
        <Link to={'/national-parks'} className='lets-adventure'>
          Start Your A11Y Adventure!
        </Link>
      </div>
    </div>
  )
}

export default Home
