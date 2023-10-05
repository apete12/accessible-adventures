import './SingleParkAccessibility.css'
import aed from '../../images/aed.png'
import ad from '../../images/ad.png'
import assistiveListening from '../../images/assistiveListening.png'
import babyStation from '../../images/babyStation.png'
import braille from '../../images/braille.png'
import bus from '../../images/bus.png'
import cellService from '../../images/cellService.png'
import closedCaptions from '../../images/closedCaptions.png'
import elevator from '../../images/elevator.png'
import entrance from '../../images/entrance.png'
import firstAid from '../../images/firstAid.png'
import outlet from '../../images/outlet.png'
import room from '../../images/room.png'
import site from '../../images/site.png'
import seating from '../../images/seating.png'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const SingleParkAccessibilityDetails = ({
  selectedSinglePark,
  singleParkAccessibility,
  setSavedParks,
  savedParks
}) => {
  const getAccessibilityIcon = name => {
    switch (name) {
      case 'Assistive Listening Systems':
        return assistiveListening
      case 'Assistive Listening Systems - T-Coil Compatible':
        return assistiveListening
      case 'Audio Description':
        return ad
      case 'Audio Description - Live':
        return ad
      case 'Automated Entrance':
        return entrance
      case 'Elevator':
        return elevator
      case 'First Aid Kit Available':
        return firstAid
      case 'First Aid/Medical Care Available':
        return firstAid
      case 'Electrical Outlet/Cell Phone Charging':
        return outlet
      case 'Cellular Signal':
        return cellService
      case 'Captioned Media':
        return closedCaptions
      case 'Bus/Shuttle Stop':
        return bus
      case 'Braille':
        return braille
      case 'Benches/Seating':
        return seating
      case 'Baby Changing Station':
        return babyStation
      case 'Automated External Defibrillator (AED)':
        return aed
      case 'Accessible Sites':
        return site
      case 'Accessible Rooms':
        return room
      default:
        return null
    }
  }

  const isParkFavorited = savedParks.find(
    savedPark => savedPark.fullName === selectedSinglePark.fullName
  )

  const helperSavePark = park => {
    if (!isParkFavorited) {
      setSavedParks([...savedParks, park])
    } else {
      setSavedParks(
        savedParks.filter(savedPark => savedPark.fullName !== park.fullName)
      )
    }
  }

  return (
    <div className='accessibility-container'>
      <h2>Park's Accessible Features</h2>
      <div className='features-styling-container'>
        {singleParkAccessibility.map((accessibility, index) => (
          <div className='feature-wrapper' key={index}>
            <div>
              <img
                src={getAccessibilityIcon(accessibility.name)}
                alt=''
              />
              <p>{accessibility.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='features-buttons-styling-container'>
        <button className='favorite-park-btn' onClick={event => helperSavePark(selectedSinglePark)}>
          {isParkFavorited
            ? 'Remove from Favorites'
            : 'Add Park to Favorites!'}
        </button>
        <div className='accessibility-support-styling-container'>
          <h3>Need Additional Information? Checkout<Link to={`https://www.nps.gov/aboutus/accessibility.htm`} className='accessibility-support-link'>National Park Service Accessibility Support</Link></h3>
        </div>
      </div>
    </div>
  )
}

export default SingleParkAccessibilityDetails

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
