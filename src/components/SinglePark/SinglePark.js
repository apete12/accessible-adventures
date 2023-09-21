import './SinglePark.css'

const SinglePark = ({ selectedSinglePark, returnAllParks, singleParkAccessibility }) => {
  return (
    <div className='single-park-container'>
      <div className='return-btn-container'>
        <button className='return-all-parks' onClick={returnAllParks}>All to All Parks</button>
      </div>
      <div className='single-park-info-container'>
        <div className='styling-container'>
          <h2>{selectedSinglePark.fullName}</h2>
          <img src={selectedSinglePark.images[0].url} alt={selectedSinglePark.images[0].altText}/>
          <div className='styling-container-two'>
            <h3>{selectedSinglePark.states}</h3>
            <h3>{selectedSinglePark.designation}</h3>
          </div>
          <p>{selectedSinglePark.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePark
