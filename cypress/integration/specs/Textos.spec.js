describe('Interagindo com textos', () => {
  it('Preenchendo campos de texto', () => {
    cy.visit('/text-box')

    cy.get('#userName')
      .type('João da Silva')

    cy.get('#userEmail')
      .type('joao.silva@gmail.com')

    cy.get('#currentAddress')
      .type('Rua dos bobos, Número 0')

    cy.get('#permanentAddress')
      .type('Rua dos bobos, Número 0')
  })

  it('Caracteres especiais', () => {
    //https://docs.cypress.io/api/commands/type#Arguments
    cy.visit('/text-box')

    cy.get('#userName')
      .type('João da Silva')
      .type('{backspace}')
      .type('{home}')
      .type('{del}')
      .type('{selectall}{del}')
  })
})