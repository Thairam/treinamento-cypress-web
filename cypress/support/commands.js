import 'cypress-file-upload'
import LoginElements from '../pages/Elements/LoginElements'

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

Cypress.Commands.add('login', () => {
  cy.visit('/')

  cy.get(LoginElements.iptUsername())
    .type(Cypress.env('username'))

  cy.get(LoginElements.iptPassword())
    .type(Cypress.env('password'))

  cy.get(LoginElements.btnLogin())
    .click()

  cy.url().should('equal', Cypress.config().baseUrl.concat('/inventory.html'))
})