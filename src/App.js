import './App.css'
import { useState, useEffect } from 'react'
import parksData from './components/dummyData'
import AllParks from './components/AllParks/AllParks'
import Header from './components/Header/Header'
import SinglePark from './components/SinglePark/SinglePark'

function App() {
  const [allParks, setAllParks] = useState([])
  const [selectedSinglePark, setSelectedSinglePark] = useState('')


  useEffect(() => {
    setAllParks(parksData.data)
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
      <SinglePark selectedSinglePark={selectedSinglePark} returnAllParks={returnAllParks}/>
      ) : (
      <AllParks allParks={allParks} selectSinglePark={selectSinglePark} /> )}
    </>
  )
}


export default App

// App with API calls

// import './App.css'
// import { useState, useEffect } from 'react'
// import { filterParks } from './utilities'
// import AllParks from './components/AllParks/AllParks'
// import { fetchParks } from './api-calls'

// function App() {
// const [allParks, setAllParks] = useState([])

// useEffect(() => {
// fetchParks()
// .then(data => {
// let filteredParks = filterParks(data)
// console.log(filteredParks)
// setAllParks(filteredParks)
// })
// .catch(error => {
// console.log(`Request failed - ${error.message}`)
// })
// }, [])

// return <AllParks allParks={allParks} />
// }

// export default App
