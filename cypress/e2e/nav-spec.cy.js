describe('Test nav links', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 200,
      fixture: 'parksData.json'
    }).as('loadParks')

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 200,
      fixture: 'amenitiesData.json'
    }).as('loadAmenities')

    .visit('http://localhost:3000/national-parks/saved-parks')
  });

  it('Visit favorites from home page', () => {

    cy.visit('http://localhost:3000/')
    cy.get('.nav-wrapper')
    cy.get('[href="/national-parks/saved-parks"]').click()
    cy.visit('http://localhost:3000/national-parks/saved-parks')
  });

    it('Visit home from favorites page', () => {

    cy.url().should('eq', 'http://localhost:3000/national-parks/saved-parks')
    cy.get('.nav-wrapper')
    cy.get('[href="/"]').click()
    cy.visit('http://localhost:3000/')
  
  });
})