import './App.css'
import { useState, useEffect } from 'react'
import parksData from './components/dummyData';
import AllParks from './components/AllParks/AllParks'

function App() {
  const [allParks, setAllParks] = useState([])

  useEffect(() => {
    setAllParks(parksData.data)
  }, [])

  return <AllParks allParks={allParks} />
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

