import './SinglePark.css'

const SinglePark = ({
  selectedSinglePark,
  returnAllParks,
  singleParkAccessibility
}) => {
  return (
    <div className='single-park-container'>
      <div className='return-btn-container'>
        <button className='return-all-parks' onClick={returnAllParks}>
          All to All Parks
        </button>
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

        <div className='accessibility-container'>
          <h2>Park's Accessible Features</h2>
          <div className='features-styling-container'>
            {singleParkAccessibility.map((accessibility, index) => (
              <div key={index}>
                <p>{accessibility.name}</p>
              </div>
            ))}
          </div>
          <div className='features-buttons-styling-container'>
            <button className='favorite-park'>Add Park to Favorites!</button>
            <button className='accessibility-support'>National Park Service Accessibility Support</button>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default SinglePark
