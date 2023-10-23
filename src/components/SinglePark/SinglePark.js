import './SinglePark.css'
import SingleParkDetails from '../SingleParkDetails/SingleParkDetails'
import SingleParkAccessibilityDetails from '../SingleParkAccessibility/SingleParkAccessibility'

const SinglePark = ({
  selectedSinglePark,
  singleParkAccessibility,
  savedParks,
  setSavedParks
}) => {
  return (
    <div className='single-park-container' id='single-park-container'>
      <div className='park-details-container'>
        <SingleParkDetails selectedSinglePark={selectedSinglePark} />
      </div>
      <div className='accessibility-details-container'>
        <SingleParkAccessibilityDetails
          singleParkAccessibility={singleParkAccessibility}
          selectedSinglePark={selectedSinglePark}
          savedParks={savedParks}
          setSavedParks={setSavedParks}
        />
      </div>
    </div>
  )
}

export default SinglePark
