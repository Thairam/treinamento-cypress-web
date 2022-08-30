describe('Interagindo com Combo box', () => {
  it('Select através de input', () => {
    cy.visit('/select-menu')

    cy.get('#withOptGroup')
      .click()

    cy.get('#react-select-2-input')
      .type('Group 1, option 1')
      .type('{enter}')

    cy.get('#selectOne')
      .click()

    cy.get('#react-select-3-input')
      .type('Dr.')
      .type('{enter}')
  })

  it('Select padrão', () => {
    cy.visit('/select-menu')

    cy.get('#oldSelectMenu')
      .select('Black')
  })

  it('Select múltiplo com lista estilo drop down', () => {
    cy.visit('/select-menu')

    cy.get('.css-yk16xz-control')
      .eq(2)
      .click()

    cy.get('#react-select-4-input')
      .type('Blue', { force: true })
      .type('{enter}')
      .type('Black', { force: true })
      .type('{enter}')
      .type('{esc}')
  })

  it('Select múltiplo padrão', () => {
    cy.visit('/select-menu')

    cy.get('#cars')
      .select(['Volvo', 'Audi'])
  })
})