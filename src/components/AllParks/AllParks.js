import './AllParks.css'
import ParkCard from '../ParkCard/ParkCard'

const AllParks = ({ allParks }) => {
    const parks = allParks && allParks.map(natPark => {
      return <ParkCard
          key={natPark.id}
          id={natPark.id}
          name={natPark.fullName}
          state={natPark.states}
        />
    
    })
    return (
    <div className='all-parks-container'>
      {parks}
    </div> )
  }

export default AllParks
