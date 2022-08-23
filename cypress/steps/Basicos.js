Then(/^devo visualizar a mensagem "([^"]*)"$/, (mensagem) => {
  cy.contains(mensagem)
})