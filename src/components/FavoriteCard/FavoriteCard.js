import './FavoriteCard.css'
import deleteIcon from '../../images/delete.png'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const FavoriteCard = (props) => {

  return (
  <div className='favorite-park-card-wrapper'>
    <Link to={`/saved-parks/details/${props.name}`}>
       <div className='favorite-park-card' key={props.id}>
         <div className='image-container' onClick={() => props.selectSinglePark(props.name)}>
           <img src={props.image} alt={props.altText}/>
         </div>
         <div className='favorite-info-wrapper'>
           <div className='favorite-park-info-container'>
             <h2>{props.name}</h2>
             <h3>{props.state}</h3>
           </div>
         </div>
       </div>
    </Link>
    <div className='delete-icon-wrapper' onClick={() => props.helperDeletePark(props.name)}>
      <h3 id='delete-text'>Remove from Favorites</h3>
      <img src={deleteIcon} id='delete-favorite' alt='delete park icon'/>
    </div>
  </div>
  ) 
}

export default FavoriteCard

FavoriteCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  image: PropTypes.object,
  selectSinglePark: PropTypes.func.isRequired,
  helperDeletePark: PropTypes.func.isRequired,
}