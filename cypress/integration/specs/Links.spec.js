describe('Interagindo com Links', () => {
  //* [IMPORTANTE] Links tem propriedades interessantes como href e target
  //?[PERGUNTA] Em que cenário essa informação pode ser útil?
  it('Links que direcionam o usuário para uma nova página', () => {
    cy.visit('/links')

    cy.get('#simpleLink').click()
  })

  it('Links que enviam requisições para API', () => {
    cy.visit('/links')

    cy.get('#created').click()
  })
})