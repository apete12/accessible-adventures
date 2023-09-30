describe('Test Single Park Details', () => {
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

  it('Should delete card from favorites and remove park from favorites page', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.visit('http://localhost:3000/national-parks')

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/national-parks/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/national-parks/Acadia%20National%20Park')

    cy.get('.accessibility-container')
    cy.get('.features-buttons-styling-container')
    cy.get('.favorite-park-btn').click()

    cy.get('.nav-wrapper')
    cy.get('[href="/saved-parks"]').click()
    cy.url().should('eq', 'http://localhost:3000/saved-parks')

    cy.get('.all-favorite-parks-container').children().should('have.length', 1)
    cy.get('.favorite-park-card')
    cy.get('.image-container > img')
    cy.get('.favorite-info-wrapper')
      .should('contain', 'Acadia National Park')
      .should('contain', 'ME')
    cy.get('.delete-icon-wrapper')
    .should('contain', 'Remove from Favorites').click()

    cy.get('.favorites-heading-container')
      .should('contain', 'Your Favorite Parks')
    cy.get('.no-favorites-message')
      .should('contain', 'You don\'t have any saved parks!')


  });

  it('Should click on favorite park card and see park details page', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.visit('http://localhost:3000/national-parks')

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/national-parks/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/national-parks/Acadia%20National%20Park')

    cy.get('.accessibility-container')
    cy.get('.features-buttons-styling-container')
    cy.get('.favorite-park-btn').click()

    cy.get('.nav-wrapper')
    cy.get('[href="/saved-parks"]').click()
    cy.url().should('eq', 'http://localhost:3000/saved-parks')

    cy.get('.all-favorite-parks-container').children().should('have.length', 1)
    cy.get('.all-favorite-parks-container').first().click()

    cy.visit('http://localhost:3000/saved-parks/Acadia%20National%20Park')
    cy.url().should('eq', 'http://localhost:3000/saved-parks/Acadia%20National%20Park')

  });

  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
      cy.get('.error-container')
      cy.get('.error')

  })

})