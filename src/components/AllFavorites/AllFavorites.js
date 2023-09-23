import './AllFavorites.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import PropTypes from 'prop-types';

const AllFavorites = ({ savedParks, selectSinglePark, setSavedParks }) => {

  const helperDeletePark = (savedPark) => {
    const filteredFavorites = savedParks.filter((park) => {
      return park.fullName !== savedPark
    })
    setSavedParks(filteredFavorites)
    console.log(savedParks)
  }   

  const parks = savedParks.map(natPark => {
    return (
      <FavoriteCard
        key={natPark.id}
        id={natPark.id}
        name={natPark.fullName}
        state={natPark.states}
        altText={natPark.images.altText}
        image={natPark.images.url}
        selectSinglePark={selectSinglePark}
        helperDeletePark={helperDeletePark}
      />
    )
  })

  return (
    <div className='favorite-parks-container'>
      <h2>Your Favorite Parks</h2>
      {savedParks.length > 0 ? (
        <div className='all-favorite-parks-container'>
          {parks}
        </div>
      ) : (
        <div className='no-favorites-message'>
          <p>You don't have any saved parks!</p>
        </div>
      )}
    </div>
  )
}

export default AllFavorites

AllFavorites.propTypes = {
    savedParks: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      states: PropTypes.string.isRequired,
      images: PropTypes.objectOf(
      PropTypes.shape({
        altText: PropTypes.string.isRequired,
        caption: PropTypes.string,
        credit: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
      })),
      description: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      url: PropTypes.string,
    })),
    selectSinglePark: PropTypes.func,
    setSavedParks: PropTypes.func,
}