import './ParkCard.css'

const ParkCard = (props) => {
return (
    <div className='park-card' key={props.id} onClick={() => props.selectSinglePark(props.name)}>
      <div className='image-container'>
        <img src={props.image}/>
      </div>
      <div className='info-container'>
        <h2>{props.name}</h2>
        <h3>{props.state}</h3>
      </div>
    </div>
  )
}

export default ParkCard
