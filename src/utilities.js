const filterAccessibleAmenities = amenityList => {
  const accessibleAmenitiesList = amenityList.data.reduce(
    (accessibleAmenities, amenity) => {
      let accessibilityAmenities = amenity.filter(type => {
        return (
          type.name.includes('Accessible') ||
          type.name.includes('Assistive Listening Systems') ||
          type.name.includes('Elevator') ||
          type.name.includes('First Aid') ||
          type.name.includes('Electrical Outlet/Cell Phone') ||
          type.name.includes('Cellular Signal') ||
          type.name.includes('Captioned Media') ||
          type.name.includes('Bus/Shuttle') ||
          type.name.includes('Braille') ||
          type.name.includes('Benches/Seating') ||
          type.name.includes('Baby Changing Station') ||
          type.name.includes('AED') ||
          type.name.includes('Automated Entrance') ||
          type.name.includes('Audio Description')
        )
      })
      if (accessibilityAmenities.length > 0) {
        accessibleAmenities.push(accessibilityAmenities)
      }

      return accessibleAmenities
    },
    []
  )
  let amenitiesByPark = accessibleAmenitiesList.reduce(
    (parkList, amenityGroup) => {
      amenityGroup.forEach(type => {
        type.parks.forEach(park => {
          if (
            park.designation === 'National Park' &&
            !parkList[park.fullName]
          ) {
            parkList[park.fullName] = []
          }

          if (parkList[park.fullName]) {
            parkList[park.fullName].push(type)
          }
        })
      })

      return parkList
    },
    {}
  )

  return amenitiesByPark
}

const filterAllParks = (accessibleParks, allParks) => {
  let accessibleParksList = Object.keys(accessibleParks)

  const accessParks = allParks.filter(park => {
    return accessibleParksList.includes(park.fullName)
  })

  return accessParks
}

const trimParkData = allParks => {
  const reducedData = allParks.map(park => {
    const {
      id,
      fullName,
      url,
      states,
      description,
      images,
      designation,
      operatingHours
    } = park
    const firstImage = images[0]
    const hours = operatingHours[0].description
    const imageUrl = firstImage?.url || ''
    const altText = firstImage?.altText || ''

    return {
      id,
      fullName,
      url,
      states,
      description,
      images: { url: imageUrl, altText },
      designation,
      hours
    }
  })
  return reducedData
}

export { filterAccessibleAmenities, filterAllParks, trimParkData }
