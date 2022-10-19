describe('Sincronismo', () => {
  it('Entendendo o sincronismo (Flaky test)', () => {
    //*https://docs.cypress.io/guides/references/configuration#Timeouts
    cy.visit('/dynamic-properties')

    cy.get('#enableAfter')
      .should('be.enabled')

    console.log("AQUI!") //![IMPORTANTE]: O cypress gerencia o sincronismo apenas dos comandos utilizados através do cy.

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Retentativas (Flaky test)', () => {
    //*https://docs.cypress.io/guides/references/configuration#Timeouts
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

    cy.wait(5000) //![MÁ PRÁTICA] tempo de espero fixo é considerado uma má prática.

    cy.get('#enableAfter')
      .should('be.enabled')

    cy.get('#colorChange')
      .should('have.class', 'text-danger')

    cy.get('#visibleAfter')
      .should('be.visible')
      .and('have.text', 'Visible After 5 Seconds')
  })

  it('Timeout', () => {
    //* alterar cypress.json -> "defaultCommandTimeout": 2000
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

    let count = 0
    cy.get('#visibleAfter')
      .should($element => {
        //* retentativas
        count += 1
        console.log('COUNT: ', count)
        expect($element).to.have.length(1)
      })

    let count2 = 0
    cy.get('#visibleAfter')
      .then($element => {
        count2 += 1
        console.log('COUNT 2: ', count2)
        expect($element).to.have.length(1)
      })
  })

  it('Should vs Then - Retornos (Teste deve falhar)', () => {
    cy.visit('/dynamic-properties')

    cy.get('#visibleAfter', { timeout: 6000 })
      .should($element => {
        //! should() ignora o retorno { QA: 'Thairam' } e mantém o elemento original fazendo com que a asserção falhe.
        expect($element).to.have.length(1)
        return { QA: 'Thairam' }
      })
      .and('to.deep.equal', { QA: 'Thairam' })

    cy.get('#visibleAfter', { timeout: 6000 })
      .then($element => {
        //* then() mantém o retorno { QA: 'Thairam' }
        expect($element).to.have.length(1)
        return { QA: 'Thairam' }
      })
      .and('to.deep.equal', { QA: 'Thairam' })
  })

  it.skip('Should vs Then - Buscar outro elemento (Causa loop infinito)', () => {
    cy.visit('/dynamic-properties')

    cy.get('#visibleAfter', { timeout: 6000 })
      .should($element => {
        //! loop infinito...
        expect($element).to.have.length(1)
        cy.get('#colorChange')
      })

    cy.get('#visibleAfter', { timeout: 6000 })
      .then($element => {
        expect($element).to.have.length(1)
        cy.get('#colorChange')
      })
  })
})