import './UrlError.css'
import { Link } from 'react-router-dom'

const UrlError = ( ) => {
  return (
    <div className='error-container'>
      <h2 className='error'>Oops! This page does not exist.</h2>
      <div className='retry'>
        <Link to='/'>Retry</Link>
      </div>
    </div>
  )
}

export default UrlError
