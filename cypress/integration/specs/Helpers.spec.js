describe('Helpers mais comuns', () => {
  it('Wrap', () => {
    const obj = { curso: 'Cypress', area: 'QA' }
    expect(obj).to.have.property('curso', 'Cypress')

    cy.wrap(obj).should('have.property', 'curso', 'Cypress')
    cy.visit('/text-box')
    cy.get('#userName').then($iptName => {
      // $iptName.type('Nome') //!A função type não está disponível para o elemento HTML.
      cy.wrap($iptName).type('Nome')
    })
  })

  it('Its', () => {
    const usuario = {
      contato: {
        telefone: {
          tipo: 'celular',
          numero: '83978456212'
        }
      }
    }

    cy.wrap(usuario)
      .its('contato.telefone.tipo')
      .should('eq', 'celular')

    cy.visit('/webtables')
    cy.get('.rt-tbody')
      .find('.rt-tr-group')
      .its('length')
      .should('eq', 10)
  })

  it('Invoke', () => {
    const soma = (x, y) => x + y
    cy.wrap({ op: soma }).invoke('op', 2, 3).should('eq', 5)

    cy.visit('/links')
    cy.get('#simpleLink')
      .should('attr', 'target')

    cy.get('#simpleLink')
      .invoke('removeAttr', 'target') //* https://api.jquery.com/removeattr/
      .should('not.have.attr', 'target')
  })

  it('Intercept - Tardio (Teste deve falhar)', () => {
    cy.visit('/books')
    cy.intercept({ method: 'GET', url: 'https://demoqa.com/BookStore/v1/Books' }).as('getBooks')

    //! [FALHA]: A requisição ocorreu assim que a página foi carregada.
    //? [PERGUNTA]: Como podemos corrigir este cenário?
    cy.wait('@getBooks')
      .its('response.statusCode')
      .should('eq', 200)
  })

  it('Intercept - Antes', () => {
    cy.intercept({ method: 'GET', url: 'https://demoqa.com/BookStore/v1/Books' }).as('getBooks')
    cy.visit('/books')

    cy.wait('@getBooks')
      .its('response.statusCode')
      .should('eq', 200)
  })

  it('Intercept - Mock com Fixture', () => {
    cy.intercept(
      { method: 'GET', url: 'https://demoqa.com/BookStore/v1/Books' },
      { fixture: 'books.json' }
    ).as('getBooks')
    cy.visit('/books')

    cy.wait('@getBooks')
      .its('response.statusCode')
      .should('eq', 200)
  })
})