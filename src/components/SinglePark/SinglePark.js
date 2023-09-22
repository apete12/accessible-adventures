import './SinglePark.css'
import aed from '../../images/aed.png'
import assistiveListening from '../../images/assistiveListening.png'
import babyStation from '../../images/babyStation.png'
import braille from '../../images/braille.png'
import bus from '../../images/bus.png'
import cellService from '../../images/cellService.png'
import closedCaptions from '../../images/closedCaptions.png'
import elevator from '../../images/elevator.png'
import firstAid from '../../images/firstAid.png'
import outlet from '../../images/outlet.png'
import site from '../../images/site.png'
import seating from '../../images/seating.png'

import { Link } from 'react-router-dom'


const SinglePark = ({selectedSinglePark, returnAllParks, singleParkAccessibility}) => {

  const getAccessibilityIcon = name => {
    switch (name) {
      case 'Assistive Listening Systems':
        return assistiveListening
      case 'Assistive Listening Systems - T-Coil Compatible':
        return assistiveListening
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
        return site
      default:
        return null
    }
  }

  return (
    <div className='single-park-container'>
      <div className='return-btn-container'>
       <Link to={`/`} onClick={returnAllParks} className='return-all-parks'>
          {/* <button className='return-all-parks' onClick={returnAllParks}> */}
            All to All Parks
          {/* </button> */}
        </Link>
      </div>
      <div className='single-park-info-container'>
        <div className='styling-container'>
          <h2>{selectedSinglePark.fullName}</h2>
          <img
            src={selectedSinglePark.images[0].url}
            alt={selectedSinglePark.images[0].altText}
          />
          <div className='styling-container-two'>
            <h3>{selectedSinglePark.states}</h3>
            <h3>{selectedSinglePark.designation}</h3>
          </div>
          <p>{selectedSinglePark.description}</p>
        </div>
        <div className='accessibility-container'>
          <h2>Park's Accessible Features</h2>
          <div className='features-styling-container'>
            {singleParkAccessibility.map((accessibility, index) => (
              <div className='feature-wrapper' key={index}>
                <div>
                  <img
                    src={getAccessibilityIcon(accessibility.name)}
                    alt={accessibility.name}
                  />
                  <p>{accessibility.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='features-buttons-styling-container'>
            <Link to={`/`} className='favorite-park'>
              {/* <button className='favorite-park'>Add Park to Favorites!</button> */}
              Add Park to Favorites!
            </Link>
            <Link to={`https://www.nps.gov/aboutus/accessibility.htm`} className='accessibility-support'>
              {/* <button className='accessibility-support'> */}
                National Park Service Accessibility Support
              {/* </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePark
