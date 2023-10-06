import './Loading.css'
import logo from '../../images/logo.png'

const Loading = () => {
  return (
    <div className='loading-container'>
      <h2>Loading National Parks...</h2>
      <img className='ally-logo-loading' src={logo} alt='ally logo' />
    </div>
  )
}

export default Loading
