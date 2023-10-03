import './SinglePark.css'
import SingleParkDetails from '../SingleParkDetails/SingleParkDetails'
import SingleParkAccessibilityDetails from '../SingleParkAccessibility/SingleParkAccessibility'
// import PropTypes from 'prop-types'

const SinglePark = ({selectedSinglePark, singleParkAccessibility, savedParks, setSavedParks}) => {
  return (
    <div className='single-park-container' id='single-park-container'>
      <div className='park-details-container'>
        <SingleParkDetails selectedSinglePark = {selectedSinglePark}/>
      </div>
      <div className='accessibility-details-container'>
        <SingleParkAccessibilityDetails singleParkAccessibility={singleParkAccessibility} selectedSinglePark = {selectedSinglePark} savedParks={savedParks} setSavedParks={setSavedParks}/>
      </div>
    </div>
    )
}

export default SinglePark

// SinglePark.propTypes = {
//   selectedSinglePark: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       fullName: PropTypes.string.isRequired,
//       states: PropTypes.string.isRequired,
//       designation: PropTypes.string,
//       images: PropTypes.shape({
//         altText: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired
//       })
//     })
//   ),
//   singleParkAccessibility: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       parks: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string,
//           name: PropTypes.string,
//           fullName: PropTypes.string,
//           designation: PropTypes.string,
//           parkCode: PropTypes.string,
//           states: PropTypes.string,
//           url: PropTypes.string
//         })
//       )
//     })
//   ),
//   savedParks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       fullName: PropTypes.string.isRequired,
//       states: PropTypes.string.isRequired,
//       images: PropTypes.objectOf(
//         PropTypes.shape({
//           altText: PropTypes.string.isRequired,
//           url: PropTypes.string.isRequired
//         })
//       ),
//       description: PropTypes.string.isRequired
//     })
//   )
// }
