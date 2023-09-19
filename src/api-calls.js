const fetchParks = () => {
    return fetch('https://developer.nps.gov/api/v1/parks?parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve data from server.')
        }
    })
}

export { fetchParks }