describe('Interagindo com checkbox', () => {
  it('Check - Marcando múltipas opções no checkbox', () => {
    cy.visit('https://html.form.guide/checkbox/html-form-with-checkbox/')
    
    cy.get('[type=checkbox]')
      .check()
  })

  it('Marcando opção no checkbox', () => {
    cy.visit('/checkbox')
    
    cy.get('[title="Expand all"]')
      .click()

    cy.get('[for=tree-node-commands]')
      .click()

    cy.get('[for=tree-node-react]')
      .click()

    cy.get('[for=tree-node-public]')
      .click()

    cy.get('[for=tree-node-wordFile]')
      .click()
  })
})