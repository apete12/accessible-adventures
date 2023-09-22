import './App.css'
import { useState, useEffect } from 'react'
import { filterAccessibleAmenities, filterAllParks } from './utilities'
import AllParks from './components/AllParks/AllParks'
import { fetchAmenities, fetchParks } from './api-calls'
import Header from './components/Header/Header'
import SinglePark from './components/SinglePark/SinglePark'
import Loading from './components/Loading/Loading'


function App() {
  const [allParks, setAllParks] = useState([])
  const [accessibleFeatures, setAccessibleFeatures] = useState([])
  const [selectedSinglePark, setSelectedSinglePark] = useState('')
  const [singleParkAccessibility, setSingleParkAccessibility] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const amenitiesData = await fetchAmenities();
        const filteredAmenities = filterAccessibleAmenities(amenitiesData);
  
        setAccessibleFeatures(filteredAmenities);
  
        if (filteredAmenities) {
          const parksData = await fetchParks();
          const filteredParks = filterAllParks(filteredAmenities, parksData.data);
          setAllParks(filteredParks);
        }
      } catch (error) {
        console.log(`Request failed - ${error.message}`);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, []);
  

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
       {isLoading ? ( 
        <Loading />
      ) : selectedSinglePark && singleParkAccessibility ? (
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


// import './App.css'
// import { useState, useEffect } from 'react'
// import { filterAccessibleAmenities, filterAllParks } from './utilities'
// import {parksData, accessibilityData } from './dummyData'
// import AllParks from './components/AllParks/AllParks'
// import Header from './components/Header/Header'
// import SinglePark from './components/SinglePark/SinglePark'
// 
// function App() {
  // const [allParks, setAllParks] = useState([])
  // const [accessibleFeatures, setAccessibleFeatures] = useState({})
  // const [selectedSinglePark, setSelectedSinglePark] = useState('')
  // const [singleParkAccessibility, setSingleParkAccessibility] = useState([])
// 
  // useEffect(() => {
// 
    // getAccessibleFeatures()
// 
  // }, [])
// 
  // const getAccessibleFeatures = () => {
    // setAccessibleFeatures(filterAccessibleAmenities(accessibilityData))
    // if (accessibleFeatures) {
      // setAllParks(filterAllParks(accessibleFeatures, parksData.data))
    // }
  // }
// 
  // const selectSinglePark = (parkFullName) => {
  //  let singlePark = allParks.find(park => park.fullName === parkFullName)
    // setSelectedSinglePark(singlePark)
// 
    // let singleParkAmenities = accessibleFeatures[parkFullName]
    // setSingleParkAccessibility(singleParkAmenities)
  // }
// 
  // const returnAllParks = () => {
    // setSelectedSinglePark('')
  // }
// 
  // return (
    // <>
      {/* <Header /> */}
      {/* {selectedSinglePark && singleParkAccessibility ? ( */}
        // <SinglePark
          // singleParkAccessibility={singleParkAccessibility}
          // selectedSinglePark={selectedSinglePark}
          // returnAllParks={returnAllParks}
        // />
      // ) : (
        // <AllParks allParks={allParks} selectSinglePark={selectSinglePark} />
      // )}
    {/* </> */}
  // )
// }
// export default App
// 









































































































