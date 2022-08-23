import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('validarPesquisaDeLivro', (titulo, autor, editora) => {
  cy.get('#searchBox')
    .type(titulo)

  const obterSeletorTD = (id) => `.ReactTable .rt-tbody .rt-tr:eq(0) .rt-td:eq(${id})`

  cy.get(`${obterSeletorTD(1)} a`)
    .should('have.text', titulo)

  cy.get(obterSeletorTD(2))
    .should('have.text', autor)

  cy.get(obterSeletorTD(3))
    .should('have.text', editora)
})
