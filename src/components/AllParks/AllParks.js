import './AllParks.css'
import ParkCard from '../ParkCard/ParkCard'
import PropTypes from 'prop-types';

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
  return (
  <>
    <div className='all-parks-header-container'>
      <h2>a11y National Parks</h2>
      <p>These National Parks have amenities related to accessibility. Happy adventuring!</p>
    </div>
    <div className='all-parks-container'>
      {parks}
    </div>
  </>
  
  )
}

export default AllParks


AllParks.propTypes = {
  allParks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      states: PropTypes.string.isRequired,
      images: PropTypes.object,
    })
  )
};
