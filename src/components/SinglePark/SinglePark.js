import './SinglePark.css'

const SinglePark = ({ selectedSinglePark, returnAllParks }) => {
    console.log(selectedSinglePark)
  return (
    <div className='single-park-container'>
      <button className='return-all-parks' onClick={returnAllParks}>All to All Parks</button>
      <h2>hi</h2>
    </div>
  )
}

export default SinglePark
