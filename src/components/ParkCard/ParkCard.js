import './ParkCard.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const ParkCard = (props) => {

return (
 <Link to={`/national-parks/${props.name}`} onClick={() => props.selectSinglePark(props.name)}>
    <div className='park-card' key={props.id} >
      <div className='image-container'>
        <img src={props.image} alt={props.altText}/>
      </div>
      <div className='info-container'>
        <h2>{props.name}</h2>
        <h3>{props.state}</h3>
      </div>
    </div>
  </Link>
  )
}

export default ParkCard

ParkCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  images: PropTypes.object,
  selectSinglePark: PropTypes.func.isRequired
}