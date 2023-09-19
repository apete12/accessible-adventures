import './App.css';
import { useState, useEffect } from 'react'
import parksData from './components/dummyData';
// import { fetchParks } from './api-calls';
import AllParks from './components/AllParks/AllParks';


function App() {
const [allParks, setAllParks] = useState([])

useEffect(() => {
  setAllParks(parksData.data)
  // fetchParks()
  // .then(data => {
    // setAllParks(data.data)
    // console.log(data)
  // })
  // .catch(error => {
    // console.log(`Request failed - ${error.message}`)
  // })
}, [])


  return (
      <AllParks allParks={allParks}/>
  );
}

export default App;
