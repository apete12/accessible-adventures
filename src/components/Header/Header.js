import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='ally-logo' src={logo} alt='ally logo'/>
            </div>
            <div className='title-container'>
                <h1>a11y adventures</h1>
            </div>
        </header>
    )
}

export default Header