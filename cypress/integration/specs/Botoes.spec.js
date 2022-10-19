describe('Interagindo com Botões', () => {
  it('Clique simples', () => {
    cy.visit('/buttons')

    // ! [MÁ PRÁTICA] o seletor deste botão é um id dinâmico
    cy.get('button:contains("Click Me")')
      .eq(2)
      .click()

    cy.get('#doubleClickBtn')
      .dblclick()

    cy.get('#rightClickBtn')
      .rightclick()
  })
})