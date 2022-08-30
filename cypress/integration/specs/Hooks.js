describe('Hooks', () => {

  context('before, beforeEach, after e afterEach', () => {
    before('Before', () => {
      cy.log("Antes de todos os testes")
    })

    beforeEach('Before Each', () => {
      cy.log("Antes de cada teste")
    })

    it('Teste 1', () => {
      cy.log("Executando o teste 1...")
      cy.wait(3000)
    })

    it('Teste 2', () => {
      cy.log("Executando o teste 2...")
      cy.wait(3000)
    })

    it('Teste 3', () => {
      cy.log("Executando o teste 3...")
      cy.wait(3000)
    })

    afterEach('After Each', () => {
      cy.log("Após cada teste")
    })

    after('After', () => {
      cy.log("Após todos os testes")
    })
  })

  context('Only - Execute somente...', () => {
    it('Apenas o Teste 1 será executado', () => {
      cy.log("Executando o teste 1...")
    })

    it('Teste 2', () => {
      cy.log("Executando o teste 2...")
    })
  })

  context('Skip - Pule os testes...', () => {
    it('Teste 1', () => {
      cy.log("Executando o teste 1...")
    })

    it.skip('Teste 2', () => {
      cy.log("Executando o teste 2...")
    })

    it('Teste 3', () => {
      cy.log("Executando o teste 2...")
    })
  })
})