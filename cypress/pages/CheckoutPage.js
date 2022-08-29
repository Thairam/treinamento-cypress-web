import CheckoutElements from "./Elements/CheckoutElements"

export default new class CheckoutPage {
  informarDadosDeEntrega() {
    cy.get(CheckoutElements.iptFirstName())
      .type('Thairam')

    cy.get(CheckoutElements.iptLastName())
      .type('Michel')

    cy.get(CheckoutElements.iptPostalCode())
      .type('58406155')

    cy.get(CheckoutElements.btnContinue())
      .click()
  }

  finalizarCompra() {
    cy.fixture("itens-compra").then(itens => {
      cy.get(CheckoutElements.labelSubTotal())
        .invoke('text')
        .should('be.equal', `Item total: $${itens.subtotal.toFixed(2)}`)

      cy.get(CheckoutElements.labelTaxa())
        .invoke('text')
        .should('be.equal', `Tax: $${itens.taxa.toFixed(2)}`)

      cy.get(CheckoutElements.labelTotal())
        .invoke('text')
        .should('be.equal', `Total: $${itens.total.toFixed(2)}`)
    })

    cy.get(CheckoutElements.btnFinalizarCompra())
      .click()
  }

  validarEfetivacaoDaCompra() {
    cy.contains('THANK YOU FOR YOUR ORDER')
      .should('be.visible')
  }
}