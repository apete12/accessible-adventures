import './FavoriteCard.css'

import { Link } from 'react-router-dom'

const FavoriteCard = (props) => {
return (
 <Link to={`/${props.name}`}>
    <div className='favorite-park-card' key={props.id} onClick={() => props.selectSinglePark(props.name)}>
      <div className='image-container'>
        <img src={props.image}/>
      </div>
      <div className='favorite-park-info-container'>
        <h2>{props.name}</h2>
        <h3>{props.state}</h3>
      </div>
    </div>
  </Link>
  )
}

export default FavoriteCard

