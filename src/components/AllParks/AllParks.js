import './AllParks.css'
import ParkCard from '../ParkCard/ParkCard'
import { useState, useEffect } from 'react'

const AllParks = ({ allParks }) => {
  const parks = allParks.map(natPark => {
    return (
      <ParkCard
        key={natPark.id}
        id={natPark.id}
        name={natPark.fullName}
        state={natPark.states}
        // image={natPark.images[0].url}
      />
    )
  })
  return <div className='all-parks-container'>{parks}</div>
}

export default AllParks
