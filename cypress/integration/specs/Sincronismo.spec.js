describe('Sincronismo', () => {
  it('Entendendo o sincronismo', () => {
    //https://docs.cypress.io/guides/references/configuration#Timeouts
    cy.visit('/dynamic-properties')

    cy.get('#enableAfter')
      .should('be.enabled')

    console.log("AQUI!")

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Retentativas', () => {
    //https://docs.cypress.io/guides/references/configuration#Timeouts
    cy.visit('/dynamic-properties')

    cy.get('#enableAfter')
      .should('be.enabled')

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Wait', () => {
    cy.visit('/dynamic-properties')

    cy.wait(5000)

    cy.get('#enableAfter')
      .should('be.enabled')

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Timeout', () => {
    // alterar cypress.json -> "defaultCommandTimeout": 4000
    cy.visit('/dynamic-properties')

    cy.get('#enableAfter', { timeout: 6000 })
      .should('be.enabled')

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Should vs Then - Retentativas', () => {
    cy.visit('/dynamic-properties')

    cy.get('#visibleAfter')
      .should($element => {
        // retentativas
        console.log('element: ', $element)
        expect($element).to.have.length(1)
      })

    cy.get('#visibleAfter')
      .then($element => {
        console.log('element: ', $element)
        expect($element).to.have.length(1)
      })
  })

  it('Should vs Then - Retornos (Teste deve falhar)', () => {
    cy.visit('/dynamic-properties')

    cy.get('#visibleAfter')
      .should($element => {
        // should ignora o retorno e mantém o elemento
        expect($element).to.have.length(1)
        return { QA: 'Thairam' }
      })
      .and('to.deep.equal', { QA: 'Thairam' })

    cy.get('#visibleAfter')
      .then($element => {
        expect($element).to.have.length(1)
        return { QA: 'Thairam' }
      })
      .and('to.deep.equal', { QA: 'Thairam' })
  })

  it.skip('Should vs Then - Buscar outro elemento (Causa loop infinito)', () => {
    cy.visit('/dynamic-properties')

    cy.get('#visibleAfter')
      .should($element => {
        // loop infinito...
        expect($element).to.have.length(1)
        cy.get('#colorChange')
      })

    cy.get('#visibleAfter')
      .then($element => {
        expect($element).to.have.length(1)
        cy.get('#colorChange')
      })
  })
})