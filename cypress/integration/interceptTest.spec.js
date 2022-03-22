describe('test', () => {
  it('test', () => {
    cy.request('POST', '/simpleTests/mockApi.php', { name: 'testttt' }).as('todoRequest')
    cy.get('@todoRequest').then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.eq('testttt')
      // expect(response.body).to.eq(200);
      assert.isObject(response.body)
      // assert.equal(response.body.name, 'testttt')
      // expect(response.body.name).to.eq('testttt')
    })

    /* cy.intercept('POST', 'simpleTests/mockApi.php', {
        body: {
          name: 'lol',
        },
      }).as('test2') */

    /* cy.intercept(
          'GET',
          'simpleTests/mockApi.php?name=new'
        ).as('getRandomStories')

        cy.visit('/simpleTests/mockApi.php')

        /*cy.intercept('POST', 'simpleTests/mockApi.php', (req) => {
            expect(req.body).to.include('Acme Company')
        }).as('test') */

    /* cy.wait('@getRandomStories').then(({response}) => {
            expect(response.body.name).to.eq('new')
        }) */

    // cy.get('.item').should('have.length', 20)

    // cy.contains('lol')

    // cy.wait('@getNextStories')

    // cy.get('.item').should('have.length', 40)
  })
})
