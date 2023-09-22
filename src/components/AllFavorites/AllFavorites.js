import './AllFavorites.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard'


const AllFavorites = ({ savedParks, selectSinglePark }) => {

  const parks = savedParks.map(natPark => {
    return (
      <FavoriteCard
        key={natPark.id}
        id={natPark.id}
        name={natPark.fullName}
        state={natPark.states}
        image={natPark.images[0].url}
        selectSinglePark={selectSinglePark}
      />
    )
  })
  return (
    <div className='favorite-parks-container'>
      <h2>Your Favorite Parks</h2>
      <div className='all-parks-container'>
        {parks}
      </div>
    </div>
  )
}

export default AllFavorites
