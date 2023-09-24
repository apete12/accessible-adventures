import './Home.css'
import { Link } from 'react-router-dom'
// import trail from '../../images/accessible-trail.png'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='ally'>
            <h2>“a11y” stands for accessibility.</h2>
            <h3>It is a numeronym, with 11 representing the count of letters between the letter a and the letter y.</h3>
            <Link to={'https://www.a11yproject.com/about/#:~:text=%E2%80%9C%20a11y%20%E2%80%9D%20stands%20for%20%E2%80%9Caccessibility,World%20War%202)%2C%20etc.'}>Sited from The a11y Project</Link>
            <Link to={'/national-parks'} className='lets-adventure'>Let's a11y adventure!</Link>
        </div>
    </div>
  )
}

export default Home
