import './SingleParkDetails.css'

import { Link } from 'react-router-dom'

const SingleParkDetails = ({ selectedSinglePark }) => {
  return (
    selectedSinglePark && (
      <>
        <div className='details-container-one'>
          <img
            src={selectedSinglePark.images.url}
            alt={selectedSinglePark.images.altText}
            className='single-park-backdrop'
          />
          <h2 className='park-heading'>{selectedSinglePark.fullName}</h2>
        </div>
        <div className='details-container-two'>
          <div className='key-details'>
            <div className='key-details-heading'>
              <h3>Key Details:</h3>
            </div>
            <p>State(s): {selectedSinglePark.states}</p>
            <p>Designation: {selectedSinglePark.designation}</p>
            <p className='park-hours'>Park Hours: {selectedSinglePark.hours}</p>
            <Link to={selectedSinglePark.url} className='park-website'>
              Check out the {selectedSinglePark.fullName} website.
            </Link>
          </div>
          <div className='park-description'>
            <div className='park-description-heading'>
              <h3>Description:</h3>
            </div>
            <p>{selectedSinglePark.description}</p>
          </div>
        </div>
      </>
    )
  )
}

export default SingleParkDetails
