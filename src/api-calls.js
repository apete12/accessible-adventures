const fetchAmenities = () => {
    return fetch('https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve data from server.')
        }
    })
}

const fetchParks = () => {
    return fetch('https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve data from server.')
        }
    })
}



export { fetchParks, fetchAmenities }