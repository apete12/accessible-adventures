import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { filterAccessibleAmenities, filterAllParks } from './utilities'
import { fetchAmenities, fetchParks } from './api-calls'
import Header from './components/Header/Header'
import SinglePark from './components/SinglePark/SinglePark'
import Loading from './components/Loading/Loading'
import AllParks from './components/AllParks/AllParks'
import AllFavorites from './components/AllFavorites/AllFavorites'


function App() {
  const [allParks, setAllParks] = useState([])
  const [accessibleFeatures, setAccessibleFeatures] = useState([])
  const [selectedSinglePark, setSelectedSinglePark] = useState('')
  const [singleParkAccessibility, setSingleParkAccessibility] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [savedParks, setSavedParks] = useState([])
  
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
    let singlePark = allParks.find(park => park.fullName == parkFullName)
    setSelectedSinglePark(singlePark)

    let singleParkAmenities = accessibleFeatures[parkFullName]
    setSingleParkAccessibility(singleParkAmenities)
    setIsLoading(false)
  }
  
  const returnAllParks = () => {
    setSelectedSinglePark('')
  }

  return (
    <>
       <Header /> 
       {isLoading && <Loading />}
       <Routes>
        <Route path="/" element={!isLoading && <AllParks allParks={allParks} selectSinglePark={selectSinglePark}/>}/>
        <Route 
          path="/:name" 
          element={<SinglePark singleParkAccessibility={singleParkAccessibility} selectedSinglePark={selectedSinglePark} returnAllParks={returnAllParks} setSavedParks={setSavedParks} savedParks={savedParks}/>}
        />
         <Route 
            path="/saved-parks" 
            element={ <AllFavorites savedParks={savedParks} selectSinglePark={selectSinglePark}/>}
         />
      </Routes>
  </>
  )
}
export default App
