import './SingleParkDetails.css'

import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const SingleParkDetails = ({selectedSinglePark}) => {

  return (
    selectedSinglePark && (
    <>    
      <div className='details-container-one'>
        <img src={selectedSinglePark.images.url} alt={selectedSinglePark.images.altText}className='single-park-backdrop'/>
        <h2 className='park-heading'>{selectedSinglePark.fullName}</h2>
      </div>
      <div className='details-container-two'>
        <div className='key-details'>
          <h3>Key Details:</h3>
          <p>State(s): {selectedSinglePark.states}</p>
          <p>Designation: {selectedSinglePark.designation}</p>
          <p className='park-hours'>Park Hours: {selectedSinglePark.hours}</p>
          <Link to={selectedSinglePark.url} className='park-website'>Check out the {selectedSinglePark.fullName} website.</Link>
        </div>
        <div className='park-description'>
          <h3>Description:</h3>
          <p>{selectedSinglePark.description}</p>
        </div>
      </div>
    </>
    )
  )
}

export default SingleParkDetails

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
//   )
// }
