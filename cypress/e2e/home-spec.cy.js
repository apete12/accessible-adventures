describe('Test Home Page with All Parks', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 200,
      fixture: 'parksData.json'
    }).as('loadParks')
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 200,
      fixture: 'amenitiesData.json'
    }).as('loadAmenities')
    .visit('http://localhost:3000/')
  });

  it('should display header', () => {
    cy.get('.title-wrapper')
    cy.get('h1')
      .should('contain', 'a11y adventures')
  });

  it('should display nav bar', () => {
    cy.get('.nav-wrapper')
    cy.get('[href="/saved-parks"]')
    cy.get('[href="/national-parks"]')
    cy.get('[href="/"]')
  });

  it('Visit favorites from home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.nav-wrapper')
    cy.get('[href="/saved-parks"]').click()
    cy.visit('http://localhost:3000/saved-parks')
  });

  it('Visit all parks from home page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.nav-wrapper')
    cy.get('[href="/national-parks"]').click()
    cy.visit('http://localhost:3000/national-parks')

});

  it('should a11y definition with links to all parks', () => {
    cy.get('.ally')
    cy.get('.ally > h2')
    .should('contain', 'a11y stands for accessibility.')
    
    cy.get('.lets-adventure').click()
    cy.url().should('eq', 'http://localhost:3000/national-parks')

  })

  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
      cy.get('.error-container')
      cy.get('.error')
  })
  

})