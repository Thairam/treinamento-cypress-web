describe('Interagindo com Links', () => {
  it('Links que direcionam o usuário para uma nova página', () => {
    cy.visit('/links')

    cy.get('#simpleLink').click()
  })

  it('Links que enviam requisições para API', () => {
    cy.visit('/links')

    cy.get('#created').click()
  })
})