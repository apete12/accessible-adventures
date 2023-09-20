import './SinglePark.css'

const SinglePark = ({ selectedSinglePark, returnAllParks }) => {
  return (
    <div className='single-park-container'>
      <button className='return-all-parks' onClick={returnAllParks}>All to All Parks</button>
      <h2>{selectedSinglePark.fullName}</h2>
      <img src={selectedSinglePark.images[0].url}/>
      <h3>{selectedSinglePark.states}</h3>
      <h3>{selectedSinglePark.designation}</h3>
      <p>{selectedSinglePark.description}</p>
      {/* <p>{selectedSinglePark.directionsInfo}</p> */}
    </div>
  )
}

export default SinglePark
