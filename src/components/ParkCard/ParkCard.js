import './ParkCard.css'

const ParkCard = (props) => {
return (
    <div className='park-card'>
      <h2>{props.name}</h2>
      <h3>{props.state}</h3>
    </div>
  )
}

export default ParkCard
