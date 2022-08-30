import LoginElements from "./Elements/LoginElements"

export default new class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('/')
  }
}