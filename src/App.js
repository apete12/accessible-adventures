import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { filterAccessibleAmenities, filterAllParks, trimParkData } from './utilities'
import { fetchAmenities, fetchParks } from './api-calls'
import Header from './components/Header/Header'
import SinglePark from './components/SinglePark/SinglePark'
import Loading from './components/Loading/Loading'
import AllParks from './components/AllParks/AllParks'
import AllFavorites from './components/AllFavorites/AllFavorites'
import Error from './components/Error/Error';
import UrlError from './components/URL/UrlError';
import Home from './components/Home/Home';


function App() {
  const [allParks, setAllParks] = useState([])
  const [accessibleFeatures, setAccessibleFeatures] = useState([])
  const [selectedSinglePark, setSelectedSinglePark] = useState('')
  const [singleParkAccessibility, setSingleParkAccessibility] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [savedParks, setSavedParks] = useState([])
  const [error, setError] = useState('')

  const location = useLocation().pathname

  console.log(savedParks)
  
  useEffect(() => {
    setError('')
  }, [location])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const amenitiesData = await fetchAmenities();
        const filteredAmenities = filterAccessibleAmenities(amenitiesData);
  
        setAccessibleFeatures(filteredAmenities);
  
        if (filteredAmenities) {
          const parksData = await fetchParks();
          const filteredParks = filterAllParks(filteredAmenities, parksData.data);
          const trimmedParkData = trimParkData(filteredParks)
          setAllParks(trimmedParkData);
        }
      } catch (error) {
        setError(`${error.message}`);
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
       <Header returnAllParks={returnAllParks}/> 
       {isLoading && <Loading />}
       <Routes>
        <Route path="/" element={!isLoading && <Home/>}/>
        <Route path="/national-parks" element={!isLoading && <AllParks allParks={allParks} selectSinglePark={selectSinglePark}/>}/>
        <Route 
          path="national-parks/:name" 
          element={!error && !isLoading && <SinglePark singleParkAccessibility={singleParkAccessibility} selectedSinglePark={selectedSinglePark} returnAllParks={returnAllParks} setSavedParks={setSavedParks} savedParks={savedParks}/>}
        />
         <Route 
            path="national-parks/saved-parks" 
            element={!error && !isLoading && <AllFavorites savedParks={savedParks} setSavedParks={setSavedParks} returnAllParks={returnAllParks} selectSinglePark={selectSinglePark}/>}
         />
          <Route path='*' element={<UrlError/>}/>
      </Routes>
      {error && <Error error={error} />}
  </>
  )
}
export default App
