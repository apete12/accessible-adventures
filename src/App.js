import './App.css'
import { useState, useEffect } from 'react'
// import parksData from './components/dummyData';
import AllParks from './components/AllParks/AllParks'
import { fetchParks } from './api-calls'

function App() {
  const [allParks, setAllParks] = useState([])

  useEffect(() => {
    fetchParks()
      .then(data => {
        setAllParks(data.data)
      })
      .catch(error => {
        console.log(`Request failed - ${error.message}`)
      })
  }, [])

  return <AllParks allParks={allParks} />
}

export default App
