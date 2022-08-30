describe('Interagindo com Botões', () => {
  it('Clique simples', () => {
    cy.visit('/buttons')

    cy.get('button:contains("Click Me")')
      .eq(2)
      .click()

    cy.get('#doubleClickBtn')
      .dblclick()

    cy.get('#rightClickBtn')
      .rightclick()
  })
})