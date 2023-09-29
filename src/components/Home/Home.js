import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='ally'>
            <h2>“a11y” stands for accessibility.</h2>
            <p>It is a numeronym, with 11 representing the count of letters between the letter a and the letter y.</p>
            <Link to={'https://www.a11yproject.com/about/#:~:text=%E2%80%9C%20a11y%20%E2%80%9D%20stands%20for%20%E2%80%9Caccessibility,World%20War%202)%2C%20etc.'} className='site'>Sited from The a11y Project</Link>
            <Link to={'/national-parks'} className='lets-adventure'>Start Your a11y Adventure</Link>
        </div>
    </div>
  )
}

export default Home
