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

  it('Should display header', () => {
    cy.get('.title-wrapper')
    cy.get('h1')
      .should('contain', 'a11y adventures')
  });

  it('Should display nav bar', () => {
    cy.get('.nav-wrapper')
    cy.get('[href="/saved-parks"]')
    cy.get('[href="/"]')
  });

  it('Should display single park details with accessible amenities', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/Acadia%20National%20Park')
    cy.get('.single-park-container')
    cy.get('.styling-container > h2')
    .should('contain', 'Acadia National Park')
    cy.get('#park-image')
    cy.get('.styling-container-two')
    .should('contain', 'ME')
    .should('contain', 'National Park')
    cy.get('.styling-container > p')

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
    cy.get('.accessibility-support')

  });

  it('Should take user to National Park Service Accessibility Support site', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/Acadia%20National%20Park')

    cy.get('.accessibility-container')
    cy.get('.features-buttons-styling-container')
    cy.get('.accessibility-support')
    // cy.url().should('eq', 'https://www.nps.gov/aboutus/accessibility.htm')
    // look up if cypress can check nav link 
  });

  it('Should add park to favorite parks on button click and display park on favorites page', () => {
    cy.wait('@loadParks');
    cy.wait('@loadAmenities');

    cy.get('.all-parks-container')

    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Acadia National Park')
    cy.get('[href="/Acadia National Park"] > .park-card > .image-container > img').click()
    cy.url().should('eq', 'http://localhost:3000/Acadia%20National%20Park')

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

  // it('Should display error message with a 500 level error', () => {
    //   cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=9xEgS46YUqsexk7Vav3aN7AsCWBfYeeGQtFk1fPU', {
    //     statusCode: 500})
    //     cy.get('.error > h2').contains('Request failed - Unable to retrieve contacts from server.')    
    // })

})