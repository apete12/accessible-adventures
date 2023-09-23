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
    cy.get('[href="/"]')
  });

  it('should display single park details upon click of national park card', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.get('.all-parks-container').children().should('have.length', 2)
    cy.get('.all-parks-container')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/Acadia%20National%20Park')
    
  });

  it('should display national park cards', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.get('.all-parks-container').children().should('have.length', 2)
    cy.get('.all-parks-container')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/Acadia National Park"] > .park-card > .image-container > img')
    cy.get(':nth-child(1) > .info-container > h3')
      .should('contain', 'ME')

    cy.get('.all-parks-container')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Badlands National Park')
    cy.get('[href="/Badlands National Park"] > .park-card > .image-container > img')
    cy.get(':nth-child(1) > .info-container > h3')
      .should('contain', 'SD')
  });

})