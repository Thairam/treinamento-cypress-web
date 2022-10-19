describe('Asserção', () => {

  context('Asserções implícitas', () => {
    it('should()', () => {
      cy.visit('/webtables')

      cy.get('.rt-table')
        .find('.rt-tbody .rt-tr')
        .first()
        .should('have.attr', 'role', 'row')
        .find('.rt-td')
        .first()
        .should('contain', 'Cierra')
        .should('have.text', 'Cierra')
        .should('match', 'div')
    })

    it('and()', () => {
      cy.visit('/webtables')

      cy.get('.rt-table')
        .find('.rt-tbody .rt-tr')
        .first()
        .should('have.attr', 'role', 'row')
        .find('.rt-td')
        .first()
        .should('contain', 'Cierra')
        .and('have.attr', 'role', 'gridcell')
        .and('match', 'div')
    })
  })

  context('Asserções explícitas', () => {
    it('expect() - Chai', () => {
      expect(true).to.be.true

      const obj = { treinamento: 'Cypress' }
      expect(obj).to.be.equal(obj)
      expect(obj).to.deep.equal({ treinamento: 'Cypress' })
    })

    it('assert', () => {
      const colaborador = {
        name: 'Thairam',
        age: 27,
      }

      assert.isObject(colaborador)
    })
  })

  context('Praticando...', () => {
    it('Validar redirecionamento dos links para nova ABA do navegador', () => {
      cy.visit('/links')
  
      cy.get('#simpleLink')
        .should('have.attr', 'href', 'https://demoqa.com')
        .and('have.attr', 'target', '_blank')
  
      cy.get('#dynamicLink')
        .should('have.attr', 'href', 'https://demoqa.com')
        .and('have.attr', 'target', '_blank')
    })
  })
})