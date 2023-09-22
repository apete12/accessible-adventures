import './AllFavorites.css'
import ParkCard from '../ParkCard/ParkCard'

const AllFavorites = ({ savedParks }) => {
    console.log(savedParks)
  const parks = savedParks.map(natPark => {
    return (
      <ParkCard
        key={natPark.id}
        id={natPark.id}
        name={natPark.fullName}
        state={natPark.states}
        image={natPark.images[0].url}
      />
    )
  })
  return <div className='all-parks-container'>{parks}</div>
}

export default AllFavorites
