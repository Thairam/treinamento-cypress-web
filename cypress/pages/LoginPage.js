import LoginElements from "./Elements/LoginElements"

export default new class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('login')
  }

  loginComCredenciaisInvalidas(username, password) {
    cy.get(LoginElements.iptUsername())
      .type(username)

    cy.get(LoginElements.iptPassword())
      .type(password)

    cy.get(LoginElements.btnLogin())
      .click()
  }
}