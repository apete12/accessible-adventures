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
  const [singleParkAccessibility, setSingleParkAccessibility] = useState([])

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
        })
        .catch(error => {
          console.log(`Request failed - ${error.message}`)
        })
    }
  }, [accessibleFeatures])

  const selectSinglePark = (parkFullName) => {
   let singlePark = allParks.find(park => park.fullName === parkFullName)
    setSelectedSinglePark(singlePark)

    let singleParkAmenities = accessibleFeatures[parkFullName]
    setSingleParkAccessibility(singleParkAmenities)
  }

  const returnAllParks = () => {
    setSelectedSinglePark('')
  }
  return (
    <>
      <Header />
      {selectedSinglePark && singleParkAccessibility ? (
        <SinglePark
          singleParkAccessibility={singleParkAccessibility}
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
