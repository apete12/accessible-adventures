import './Error.css'
import { Link } from 'react-router-dom'

const Error = ({ error }) => {
  return (
    <div className='error-container'>
      <h2 className='error'>{error}</h2>
      <div className='retry'>
        <Link to='/'>Retry</Link>
      </div>
    </div>
  )
}

export default Error
