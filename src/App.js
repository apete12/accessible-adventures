import './App.css'
import { useState, useEffect } from 'react'
import { filterAccessibleAmenities, filterAllParks } from './utilities'
import AllParks from './components/AllParks/AllParks'
import { fetchAmenities, fetchParks } from './api-calls'
import Header from './components/Header/Header'
import SinglePark from './components/SinglePark/SinglePark'

function App() {
  const [allParks, setAllParks] = useState([])
  const [accessibleFeatures, setAccessibleFeatures] = useState([])
  const [selectedSinglePark, setSelectedSinglePark] = useState('')

  useEffect(() => {
    fetchAmenities()
      .then(data => {
        setAccessibleFeatures(filterAccessibleAmenities(data))
      })
      .catch(error => {
        console.log(`Request failed - ${error.message}`)
      })

    if (accessibleFeatures) {
      fetchParks()
        .then(data => {
          setAllParks(filterAllParks(accessibleFeatures, data.data))

          console.log(allParks)
        })
        .catch(error => {
          console.log(`Request failed - ${error.message}`)
        })
    }
  }, [])

  const selectSinglePark = id => {
    let singlePark = allParks.find(park => park.id === id)
    setSelectedSinglePark(singlePark)
  }
  const returnAllParks = () => {
    setSelectedSinglePark('')
  }
  return (
    <>
      <Header />
      {selectedSinglePark ? (
        <SinglePark
          selectedSinglePark={selectedSinglePark}
          returnAllParks={returnAllParks}
        />
      ) : (
        <AllParks allParks={allParks} selectSinglePark={selectSinglePark} />
      )}
    </>
  )
}
export default App
