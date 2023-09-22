import './AllParks.css'
import ParkCard from '../ParkCard/ParkCard'

const AllParks = ({ allParks, selectSinglePark }) => {
  const parks = allParks.map(natPark => {
    return (
      <ParkCard
        key={natPark.id}
        id={natPark.id}
        name={natPark.fullName}
        state={natPark.states}
        altText={natPark.images.altText}
        image={natPark.images.url}

        selectSinglePark={selectSinglePark}
      />
    )
  })
  return <div className='all-parks-container'>{parks}</div>
}

export default AllParks
