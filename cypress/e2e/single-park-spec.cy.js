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

  it('Should display single park details with accessible amenities', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.visit('http://localhost:3000/national-parks')

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/national-parks/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/national-parks/Acadia%20National%20Park')
    cy.get('.details-container-one')
    cy.get('h2')
    .should('contain', 'Acadia National Park')
    cy.get('.details-container-two')
    .should('contain', 'ME')
    .should('contain', 'National Park')

    cy.get('.accessibility-container')
    cy.get('.accessibility-container > h2')
    .should('contain', 'Park\'s Accessible Features')
    cy.get('.features-styling-container')
    cy.get('.features-styling-container > :nth-child(1) > div')
    .should('contain', 'Accessible Rooms')
    cy.get('.features-styling-container > :nth-child(6) > div')
    .should('contain', 'Elevator')


    cy.get('.features-buttons-styling-container')
    cy.get('.favorite-park-btn')
    cy.get('.accessibility-support-link')

  });

  it('Should take user to National Park Service Accessibility Support site', () => {
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
    cy.get('.accessibility-support-link')
    cy.get('[href="https://www.nps.gov/aboutus/accessibility.htm"]')
  });

  it('Should add park to favorite parks on button click and display park on favorites page', () => {
    cy.wait('@loadParks')
    cy.wait('@loadAmenities')

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
    .should('contain', 'Remove from Favorites')

  });

  it('Should take user to National Park Service Accessibility Support site', () => {
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
    cy.get('.accessibility-support-link')
    
  });

  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/amenities/parksplaces?api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
      statusCode: 500})
      cy.get('.error-container')
      cy.get('.error')

  })
  it('Should display URL error page with a 404 level error', () => {
    cy.visit('http://localhost:3000/nonsense')
    cy.get('.error-container')
    cy.get('.error')

    })

})