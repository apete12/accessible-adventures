import './ParkCard.css'
import { Link } from 'react-router-dom'

const ParkCard = (props) => {
return (
 <Link to={`/${props.name}`}>
    <div className='park-card' key={props.id} onClick={() => props.selectSinglePark(props.name)}>
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
