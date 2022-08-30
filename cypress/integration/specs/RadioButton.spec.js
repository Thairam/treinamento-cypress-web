describe('Interagindo com radio button', () => {
  it('Check - Marcando opção no radio button', () => {
    cy.visit('https://bulma.io/documentation/form/radio/')
    
    cy.get('[name=answer]')
      .first()
      .check()
  })

  it('Outras formas de marcar o radio button', () => {
    cy.visit('/radio-button')

    cy.get('#yesRadio')
      .click({ force: true })

    cy.get('[for=impressiveRadio]')
      .click()
  })
})