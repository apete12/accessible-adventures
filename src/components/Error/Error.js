import './Error.css';
import { Link } from 'react-router-dom';

const Error = ({error}) => {
  return (
    <section className='error-container'>
      <h2>{error}</h2>
      <Link to='/'>Retry</Link>
    </section>
  )
}

export default Error;